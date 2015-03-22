
# -*- coding: utf-8 -*-

from app import app
from flask import request, jsonify

@app.route('/ask')
def ask():
	answer = [{'rate':(len(mess) % 2), 'text':mess} for mess in request.args.getlist('messages')]
	print answer
	return jsonify(estimates=answer)
	
@app.route('/index')
def index():
	return 'Welcome'