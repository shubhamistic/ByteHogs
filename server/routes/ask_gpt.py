from flask import Blueprint, request
from controllers import gpt_controller


ask_gpt_routes = Blueprint('ask-gpt', __name__)


@ask_gpt_routes.route('/', methods=['GET'])
def authenticate():
    question = request.args.get('question')
    return gpt_controller.ask_gpt(question)