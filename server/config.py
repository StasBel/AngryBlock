import os
import psycopg2
import urlparse

basedir = os.path.abspath(os.path.dirname(__file__))


if os.environ.get('DATABASE_URL') is None:
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'app.db') + '?check_same_thread=False'
else:
	urlparse.uses_netloc.append("postgres")
	SQLALCHEMY_DATABASE_URI = urlparse.urlparse(os.environ["DATABASE_URL"])
	conn = psycopg2.connect(
		database=SQLALCHEMY_DATABASE_URI.path[1:],
		user=SQLALCHEMY_DATABASE_URI.username,
		password=SQLALCHEMY_DATABASE_URI.password,
		host=SQLALCHEMY_DATABASE_URI.hostname,
		port=SQLALCHEMY_DATABASE_URI.port
	)