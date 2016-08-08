from flask import Flask, render_template
app = Flask("app", static_folder="static/dist")

DEBUG = True
PORT = 8000
HOST = '0.0.0.0'

@app.route("/")
def landing():
    return render_template("landing.jinja")

@app.route("/home")
def home():
    return render_template("home.jinja")

if __name__ == "__main__":
    app.run(debug=DEBUG, host=HOST, port=PORT)
