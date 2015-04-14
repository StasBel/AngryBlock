
# -*- coding: utf-8 -*-

from app import app
from flask import request, jsonify
import json
from flask.ext.cors import CORS, cross_origin

@app.route('/ask', methods=['POST'])
@cross_origin()
def ask():	
	answer = []
	body = json.loads(request.data)
	for mess in body['messages']:
		answer.append({'rate':len(mess), 'text':mess})
	return jsonify(estimates=answer)
	
@app.route('/')
def index():
	return 'Welcome'
