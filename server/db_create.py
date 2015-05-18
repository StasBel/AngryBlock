#!flask/bin/python

from config import SQLALCHEMY_DATABASE_URI
from app import db, models
import os.path
from app.models import Word

db.create_all()


w = Word.query.get('doc_information')
if w is None:
	w = Word(id = 'doc_information')
	db.session.add(w)
w = Word.query.get('word_information')
if w is None:
	w = Word(id = 'word_information')
	db.session.add(w)
db.session.commit()
