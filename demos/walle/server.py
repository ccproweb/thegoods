from flask import Flask, render_template, session, redirect, request, flash
import re
from flask_bcrypt import Bcrypt
from mysqlconnection import connectToMySQL

app = Flask(__name__)
app.secret_key = "The secrest biz u ever seent"
bcrypt = Bcrypt(app)

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 

def login_user(user_info, session_object):
    session_object['curr_user_id'] = user_info['id']
    session_object['curr_user_name'] = user_info['name']

@app.route("/")
def show_log_reg():
    print("going to logreg!")
    return render_template("landing.html")

@app.route("/wall")
def show_wall():
    if not 'curr_user_id' in session:
        return redirect("/")
    else:
        # get logged in user dat
        logged_in_user = {
            'name': session['curr_user_name'],
            'id': session['curr_user_id']
        }
        print(logged_in_user)
        # get uesrs messages
        mysql = connectToMySQL("walle")
        msg_query = "SELECT message, first_name, messages.id FROM messages JOIN users ON messages.sender_id=users.id WHERE recipient_id=%(id)s;"
        msg_data = {'id': logged_in_user['id']}
        messages = mysql.query_db(msg_query, msg_data)
        print(messages)
        # get all users
        mysql = connectToMySQL("walle")
        users_query = "SELECT first_name, id FROM users"
        users = mysql.query_db(users_query)
        print(users)
        context = {
            'user': logged_in_user,
            'users': users,
            'messages': messages,
        }
        return render_template("wall.html", context=context)

@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")

@app.route("/login", methods= ['POST'])
def login():
    errors = []
    # grab deetz
    input_pw = request.form['password']
    input_email = request.form['email']
    # see if user exists
    mysql = connectToMySQL("walle")
    query = "SELECT * FROM users WHERE(email = %(email)s)"
    data = {
        'email': input_email
    }
    result = mysql.query_db(query, data)
    if len(result) is not 1:
        errors.append("email is funk")
    else:
        if not bcrypt.check_password_hash(result[0]['password_hash'], input_pw):
            errors.append("password is funk")
        else:
            login_user({'id': result[0]['id'], 'name':result[0]['first_name']}, session)
            print(session) 
    if len(errors) == 0:
        return redirect("/wall")
    else:
        flash("yore stuff is wrong")
        return redirect("/")

@app.route("/register", methods=["POST"])
def register():
    print(request.form)
    error_messages = []
    # check validations
    if len(request.form['first_name']) < 2:
        error_messages.append("Need more first name!")
    if len(request.form['last_name']) < 2:
        error_messages.append("Need more last name!")
    if not EMAIL_REGEX.match(request.form['email']):
        error_messages.append("Email is not email-y enough")
    if request.form['password'] != request.form['confirm_password']:
        error_messages.append("Passwords not matching enough")
    if len(request.form['password']) < 2:
        error_messages.append("password is not long enough")

    if len(error_messages) == 0:
        # log our user in...
        pw_hash = bcrypt.generate_password_hash(request.form['password'])
        mysql = connectToMySQL("walle")
        query = "INSERT INTO users (first_name,last_name,email,password_hash) VALUES (%(first)s, %(last)s, %(email)s, %(password)s)"
        data = {
            'first':    request.form['first_name'],
            'last':     request.form['last_name'],
            'email':    request.form['email'],
            'password': pw_hash,
        }
        results = mysql.query_db(query, data)
        print(results)
        login_user({'id': results, 'name': request.form['first_name']}, session)
        return redirect("/wall")
    else:
        # flash a bunch of messages
        for message in error_messages:
            print(message)
            flash(message)
        return redirect("/")

@app.route("/delete/message", methods=['POST'])
def delete_message():
    mysql = connectToMySQL('walle')
    query = "DELETE FROM messages WHERE id=%(msg_id)s;"
    data = {'msg_id': request.form['msg_id']}
    results = mysql.query_db(query, data)
    print(results)
    return redirect("/wall")

@app.route("/message", methods=["POST"])
def create_message():
    mysql = connectToMySQL('walle')
    new_message = {
        'sender_id':     request.form['sender_id'],
        'recipient_id':  request.form['recipient_id'], 
        'message':       request.form['message']
    }
    query = "INSERT INTO messages (message, recipient_id, sender_id) VALUES (%(message)s, %(recipient_id)s, %(sender_id)s)"
    result = mysql.query_db(query, new_message)
    print(result)
    return redirect("/wall")

if __name__ == "__main__":
    print("We riunning this biz!")
    app.run(debug=True)