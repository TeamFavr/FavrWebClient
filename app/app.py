from flask import Flask, render_template
app = Flask(__name__)

DEBUG = True
PORT = 8000
HOST = '0.0.0.0'

@app.route("/")
def hello():
    return render_template("index.jinja")

if __name__ == "__main__":
    app.run(debug=DEBUG, host=HOST, port=PORT)
