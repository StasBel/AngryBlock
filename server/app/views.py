from app import app
from flask import request

@app.route('/ask', methods=['POST', 'GET'])
def ask():
	if request.method == 'POST':
		if request.form['data'] == 'go home':
			return 'u go'
		else:
			return request.form['data']
	return 'Use POST request with [data] field'
    
@app.route('/index')
def index():
	return 'Welcome'