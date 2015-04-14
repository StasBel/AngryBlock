import os
from flask import Flask, request
from flask.ext.cors import CORS  # The typical way to import flask-cors

app = Flask(__name__)
cors = CORS(app)
from app import views