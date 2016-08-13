
from flask_script import Manager

from app import app

manager = Manager(app)

DEBUG = True
PORT = 8000
HOST = '0.0.0.0'

@manager.command
def run():
    app.run(host=HOST, port=PORT, debug=DEBUG)

if __name__ == "__main__":
    manager.run()
