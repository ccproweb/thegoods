from models.User import User
from models.Dojo import Dojo
from config import db
from flask import redirect, render_template, request


def main():
    # grab all the dojos
    dojo_list = Dojo.query.all()
    return render_template("main.html", dojos = dojo_list)


def add_ninja():
    User.add_new_ninja(request.form)
    return redirect("/")


def add_dojo():
    input_name=request.form['name']
    input_city=request.form['city']
    input_state=request.form['state']
    new_dojo=Dojo(name=input_name, city=input_city, state=input_state)
    db.session.add(new_dojo)
    db.session.commit()
    return redirect("/")
