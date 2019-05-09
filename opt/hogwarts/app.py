from flask import Flask, render_template, redirect, request, flash, session
from mysqlconnection import connectToMySQL
from flask_bcrypt import Bcrypt
import re
import random

app = Flask(__name__)
app.secret_key="secretest biz"

bcrypt = Bcrypt(app)

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

@app.route("/")
def main():
    return render_template("main.html")

@app.route("/register", methods=["POST"])
def register():
    next_page = "/hogwarts"
    errors = []
    if len(request.form['username']) <= 2:
        errors.append("need a username with at least 2 characters")
    
    if not EMAIL_REGEX.match(request.form['email']):
        errors.append("need a better email address")
    
    if request.form['password'] != request.form['confirm']:
        errors.append("passwords don't match")

    if len(errors) == 0:
        flash("WELCOME TO HOGWARTS!")
        db = connectToMySQL("hogwarts")
        query = "INSERT INTO students (username, password, email, houses_id) VALUES (%(un)s, %(pw)s, %(em)s, %(hs)s)"
        data = {
            "un": request.form['username'],
            "pw": bcrypt.generate_password_hash(request.form['password']),
            "em": request.form['email'],
            "hs": random.randint(1, 4)
        }
        db.query_db(query, data)
    else:
        next_page="/"
        for error in errors:
            flash(error)
    
    return redirect(next_page)

@app.route("/login", methods=["POST"])
def login():
    next_page="/hogwarts"
    username = request.form['username']
    db = connectToMySQL("hogwarts")
    query = "SELECT * FROM students WHERE username=%(un)s"
    data={"un":username}
    result = db.query_db(query, data)
    if len(result) is not 1 or not bcrypt.check_password_hash(result[0]['password'], request.form['password']):
        print(bcrypt.check_password_hash(result[0]['password'], request.form['password']))
        flash("Invalid Login Credentials")
        next_page="/"
    return redirect(next_page)
    

@app.route("/hogwarts")
def hogwarts():
    db = connectToMySQL("hogwarts")
    houses_query = "SELECT * FROM houses"
    houses = db.query_db(houses_query)
    print(houses)
    house_info = {}
    for house in houses:
        db = connectToMySQL("hogwarts")
        students_query = "SELECT username, email FROM students WHERE students.houses_id = %(id)s;"
        data = {"id": house["id"]}
        house_info[house["name"]] = db.query_db(students_query, data)

    return render_template("hogwarts.html", houses=house_info)

if __name__ == "__main__":
    app.run(debug=True)