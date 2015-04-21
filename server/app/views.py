# -*- coding: utf-8 -*-

from app import app
from flask import request, jsonify
import json, nltk
from flask.ext.cors import CORS, cross_origin
from nltk import NaiveBayesClassifier, word_tokenize
import pickle

with open('my_classifier.pickle') as f:
	classifier = pickle.load(f)

all_words = set()
train_set = []

@app.route('/ask', methods=['POST'])
@cross_origin()
def ask():	
	answer = []
	body = json.loads(request.data)
	for mess in body['messages']:
		test = {word.lower(): (word in word_tokenize(mess.lower())) for word in all_words}
		answer.append({'rate':len(mess), 'text':mess})
	return jsonify(estimates=answer)
	
@app.route('/ans', methods=['POST'])
@cross_origin()
def ans():	
	body = json.loads(request.data)
	if body == 'save':
		all_words = set(word.lower() for passage in train_set for word in word_tokenize(passage[0]))
		t = [({word: (word in word_tokenize(x[0])) for word in all_words}, x[1]) for x in train_set]
		print t
		classifier = nltk.NaiveBayesClassifier.train(t)
		with open('my_classifier.pickle', 'wb') as f:
			pickle.dump(classifier, f)
		return "Thanks"
	for mess in body:
		train_set.append((mess['message'], mess['isGood']))
	print body
	return "Thanks!"
	
@app.route('/')
def index():
	return 'Welcome'
