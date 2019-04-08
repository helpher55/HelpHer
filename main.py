from flask import Flask, Response, request, redirect
from py.formCadastro import *
from py.authentication import *
from urllib.parse import unquote
import datetime


app = Flask(__name__)

@app.route('/')
def main():
	return redirect('static/index.html')


@app.route('/saveNewUser', methods=['POST'])
def saveNewUser():
	item = {"login": request.args.get("login"),
			"userid": request.args.get("userid"),
			"name": request.args.get("username"),
			"email": request.args.get("useremail"),
			"timestamp": datetime.datetime.utcnow()}
	return saveUser(item)


@app.route('/listForm', methods=['POST'])
def listForm():	
	if authenticate() != 'error':
		return listCadastro()
	return 'error'
	

@app.route('/saveForm', methods=['POST'])
def saveForm():
	if authenticate() != 'error':
		item = {"abuso": unquote(request.args.get("abuso")),
				"quantasvezes": unquote(request.args.get("quantasvezes")),
				"descricao": unquote(request.args.get("descricao")),
				"userid": request.args.get("userid"),	
				"timestamp": datetime.datetime.utcnow()}
		return saveCadastro(item)
	return 'error'	


def authenticate():
	login = request.args.get("login")
	userid = request.args.get("userid")
	token = request.args.get("token")
	if login == 'fb':
		return verifyFbToken(token, userid)
	elif login == 'gl':
		return verifyGlToken(token, userid)


if __name__ == "__main__":
	app.run(debug=True)