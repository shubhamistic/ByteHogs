from flask import Flask
from routes.ask_gpt import ask_gpt_routes

app = Flask(__name__)

# define the routes
app.register_blueprint(ask_gpt_routes, url_prefix='/ask_gpt')


if __name__ == '__main__':
    app.run()
