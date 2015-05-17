from app import db

class Word(db.Model):
    id = db.Column(db.String(20), primary_key = True)
    pos = db.Column(db.Integer, default = 0)
    neg = db.Column(db.Integer, default = 0)
    cnt = db.Column(db.Integer, default = 0)

    def __repr__(self):
        return '<Word %r>' % (self.id)