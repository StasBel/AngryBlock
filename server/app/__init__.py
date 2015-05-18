import os
from flask import Flask, request
from flask.ext.cors import CORS, cross_origin
from flask.ext.sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object('config')
if not (os.environ.get('DATABASE_URL') is None):
	app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
db = SQLAlchemy(app)
cors = CORS(app, headers=['Content-Type'])

from app import views, models