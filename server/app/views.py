
# -*- coding: utf-8 -*-

from app import app, db, models
from flask import request, jsonify
import json, nltk
from flask.ext.cors import CORS, cross_origin
from nltk import word_tokenize
from models import Word
import math
from math import log

nltk.data.path.append('./nltk_data/')

@app.route('/ask', methods=['POST'])
@cross_origin()
def ask():	
	answer = []
	body = json.loads(request.data)
	info = Word.query.get('word_information')
	doc = Word.query.get('doc_information')
		
	for mess in body['messages']:
		pos_p = log(doc.pos / float(doc.cnt))
		neg_p = log(doc.neg / float(doc.cnt))
		for word in word_tokenize(mess.lower()):
			w = Word.query.get(word)
			if not (w is None):
				pos_p += log((w.pos + 1) / float(info.pos + info.cnt))
				neg_p += log((w.neg + 1) / float(info.neg + info.cnt))
		if (neg_p > pos_p):
			answer.append({'rate':0, 'text':mess})
		else:
			answer.append({'rate':1, 'text':mess})	
	return jsonify(estimates=answer)
	
@app.route('/ans', methods=['POST'])
@cross_origin()
def ans():	
	body = json.loads(request.data)
	info = Word.query.get('word_information') 
	doc = Word.query.get('doc_information')		
	for new in body:
		print word_tokenize(new['message'].lower())
		if (int(bool(new['isGood'])) == 1):
			doc.pos = doc.pos + 1
		else:
			doc.neg = doc.neg + 1	
		doc.cnt = doc.cnt + 1
		db.session.commit()
		if (int(bool(new['isGood'])) == 1):
			for word in word_tokenize(new['message'].lower()):
				w = Word.query.get(word)
				if w is None:
					w = Word(id = word, pos = 1, cnt = 1)
					info.pos = info.pos + 1
					info.cnt = info.cnt + 1
					db.session.add(w)
					db.session.commit()
				else:
					info.pos = info.pos + 1
					w.pos = w.pos + 1
					w.cnt = w.cnt + 1
					db.session.commit()
		else:
			for word in word_tokenize(new['message'].lower()):
				w = Word.query.get(word)
				if w is None:
					w = Word(id = word, neg = 1, cnt = 1)
					info.neg = info.neg + 1
					info.cnt = info.cnt + 1
					db.session.add(w)
					db.session.commit()
				else:
					info.neg = info.neg + 1
					w.neg = w.neg + 1
					w.cnt = w.cnt + 1
					db.session.commit()
		db.session.commit()
	db.session.commit()
	return "Thanks!"
	
@app.route('/')
def index():
	return 'Welcome'
