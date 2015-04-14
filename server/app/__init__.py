import os
from flask import Flask, request

app = Flask(__name__)
cors = CORS(app)
from app import views