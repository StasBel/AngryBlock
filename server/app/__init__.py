import os
from flask import Flask, request
from flask.ext.cors import CORS, cross_origin
from flask.ext.sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object('config')
db = SQLAlchemy(app)
cors = CORS(app, headers=['Content-Type'])

from app import views, models