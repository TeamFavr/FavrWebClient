from flask import Flask, render_template, g
app = Flask("app", static_folder="static/dist")
import os

DEBUG = True
PORT = 8000
HOST = '0.0.0.0'

@app.before_request
def before_req():
    g.api_url = os.environ['API_URL']

@app.route("/")
def landing():
    return render_template("landing.jinja")

@app.route("/home")
def home():
    return render_template("home.jinja")

@app.route("/config/url")
def config_url():
    return g.api_url

if __name__ == "__main__":
    app.run(debug=DEBUG, host=HOST, port=PORT)
