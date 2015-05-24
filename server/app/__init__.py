import os
from flask import Flask, request
from flask.ext.cors import CORS, cross_origin
from flask.ext.sqlalchemy import SQLAlchemy
import logging
import sys

app = Flask(__name__)

app.logger.addHandler(logging.StreamHandler(sys.stdout))
app.logger.setLevel(logging.ERROR)
app.config.from_object('config')
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')

db = SQLAlchemy(app)

cors = CORS(app, headers=['Content-Type'])

from app import views, models