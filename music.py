from flask import render_template, Flask

app = Flask(__name__)

from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
app.config['SECRET_KEY'] = 'ec9439cfc6c796ae2029594d'

class RegisterForm(FlaskForm):
    username = StringField(label='User Name:')
    email_address = StringField(label='Email Address:')
    password1 = PasswordField(label='Password:')
    password2 = PasswordField(label='Confirm Password:')
    submit = SubmitField(label='Create Account')

class LoginForm(FlaskForm):
    username = StringField(label='User Name:')

    password1 = PasswordField(label='Password:')

    submit = SubmitField(label='Log-in')

@app.route('/')
@app.route('/home')
def home_page():
    return render_template("home.html")

@app.route('/#')
def playlist_page():
    return render_template("playlist.html")

@app.route('/registration')
def registration():
    form = RegisterForm()
    return render_template("registration.html", form = form)

@app.route('/log-in')
def log_in():
    form = LoginForm()
    return render_template("login.html", form=form)

'''
@app.route('/your-playlists')
def playlist_page():
    
    return render_template("playlist.html")

class User(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    username = db.Column(db.String(length=30), nullable=False, unique=True)
    email_address = db.Column(db.String(length=50), nullable=False, unique=True)
    password_hash = db.Column(db.String(length=60), nullable=False)
    playlists = db.Column(db.Integer(), nullable=False, default=1000)
'''
if __name__ == "__main__":
    app.run(port=2020, host="127.0.0.1", debug=True)
