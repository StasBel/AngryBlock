import os
from flask import Flask, request
from flask.ext.cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app, resources={r"/ask*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

from app import views