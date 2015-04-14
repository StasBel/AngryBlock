import os
from flask import Flask, request
from flask.ext.cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app, headers=['Content-Type'])

from app import views