
# -*- coding: utf-8 -*-

from app import app
from flask import request, jsonify
from flask.ext.cors import cross_origin

@app.route('/ask', methods=['POST', 'GET'])
@cross_origin()
def ask():	
	answer = []
	for mess in request.form.getlist('messages'):
		answer.append({'rate':len(mess), 'text':mess})
	return jsonify(estimates=answer)
	
@app.route('/index')
def index():
	return 'Welcome'
