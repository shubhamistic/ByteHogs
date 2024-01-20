from flask import Flask
from flask_cors import CORS
from routes.ask_gpt import ask_gpt_routes

app = Flask(__name__)
CORS(app)

# define the routes
app.register_blueprint(ask_gpt_routes, url_prefix='/ask-gpt')


if __name__ == '__main__':
    app.run(debug=True)
