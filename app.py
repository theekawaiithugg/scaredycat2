from flask import Flask, send_file, render_template,render_template_string, request, url_for, session, redirect
#Import sqlalchemy text to use stored procedures.
from sqlalchemy import text
import os
import math
# we need to create  an instance of the Flask to create an object that we can use
#we are going to use the __name__ variable to determine the root path of the application
#A root path is the main directory of the application, think of this as the defualt route.
app = Flask(__name__)
app.secret_key = os.urandom(24)  # Secret key for session management

#The next 3 functions are for LOGGING IN AND MAKINGSURE WE HAVE LOGINS THAT
#WILL EVENTUALLY HAVE DIFFERENT PAGES DEPENDING ON WHEN YOU GET THE PASSWORD ANSWER RIGHT.
#Login 1 will have no changes.

@app.route('/logingin1', methods=['GET', 'POST'])
def logingin1():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if username == 'void' and password == 'void':  # Replace with your own username and password
            session['logged_in'] = True
            return redirect(url_for('protected'))
        else:
            return render_template('login2.html')
    return render_template('login1.html')


@app.route('/logingin2', methods=['GET', 'POST'])
def logingin2():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if username == 'void' and password == 'void':  # Replace with your own username and password
            session['logged_in'] = True
            #TEMPORARY ENDING UNTILLNEXT UPDATE
            return redirect(url_for('protected'))
        else:
            return render_template('Login3.html')
    return render_template('login2.html')

@app.route('/logingin3', methods=['GET', 'POST'])
def logingin3():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if username == 'void' and password == 'void':  # Replace with your own username and password
            session['logged_in'] = True
            #TEMPORARY ENDING UNTILLNEXT UPDATE
            return redirect(url_for('protected'))
        else:
            return render_template('eyeballs.html')
    return render_template('login3.html')

#THIS IS THE FIRST JUMPSCARE <- PURPOSEFULL HE IS PART OF THE CHARACTERS
@app.route('/eyeballs')
@app.route('/ the_watcher')
@app.route('/ the_spy')
@app.route('/ the_spy')
def eyeballs():
    return render_template('eyeballs.html')

#THIS IS TH E LANDING PAGE FOR EVERYTHING AS WE HAVE
@app.route('/protected')
def protected():
    return render_template('protected.html')

@app.route('/logout')
def logout():
    session['logged_in'] = False
    return redirect(url_for('index.html'))

#BEGGING OF ROUTES FOR WEBSITE
@app.route('/')
@app.route('/home')
@app.route('/welcome')
@app.route('/start')
@app.route('/begging')


def index():
    #whatever we return from this function will be displayed on the browser now we will send the HTML template to the client browser
    return render_template("index.html")

#LOGIN PAGES FOR THE DIFFERENT LOGIN SCREENS
@app.route('/Login1')
def Login1():
    #whatever we return from this function will be displayed on the browser now we will send the HTML template to the client browser
    return render_template("Login1.html")


@app.route('/Login2')
def Login2():
    #whatever we return from this function will be displayed on the browser now we will send the HTML template to the client browser
    return render_template("Login2.html")

@app.route('/Login3')
def Login3():
    #whatever we return from this function will be displayed on the browser now we will send the HTML template to the client browser
    return render_template("Login3.html")

#HINTS THAT SHOULD LOOP BACK TO THEIR OWN LOGIN PAGES
@app.route('/hint1')
def hint1():
    #whatever we return from this function will be displayed on the browser now we will send the HTML template to the client browser
    return render_template("hint1.html")

@app.route('/hint2')
def hint2():
    #whatever we return from this function will be displayed on the browser now we will send the HTML template to the client browser
    return render_template("hint2.html")

@app.route('/hint3')
def hint3():
    #whatever we return from this function will be displayed on the browser now we will send the HTML template to the client browser
    return render_template("hint3.html")

#FURTHER PROGRESSION
@app.route('/grab')
def grab():
    return render_template('grab.html')

@app.route('/off')
def off():
    return render_template('off.html')

@app.route('/on')
def on():
    return render_template('on.html')

if __name__== "__main__":
#now it is time for the fun part, we get to start the flask application server
#and listen fro incoming requests from the client brrowser
#if there are no errors this wil keep running untill we stop it.
    app.run(debug=True)