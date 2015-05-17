#!flask/bin/python

from config import SQLALCHEMY_DATABASE_URI
from config import SQLALCHEMY_MIGRATE_REPO
from app import db, models
import os.path

w = models.Word(id = 'doc_information')
db.session.add(w)
w = models.Word(id = 'word_information')
db.session.add(w)
db.session.commit()
