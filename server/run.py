#!flask/bin/python

from app import app

if __name__ == "__main__":
	app.run(debug=True) #host='192.168.210.5', port=33507)