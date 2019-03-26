from flask import Flask, Response, request, render_template
import pymongo


app = Flask(__name__)
app.config['TEMPLATES_AUTO_RELOAD'] = True
dburi = "mongodb+srv://admin:adminhelpher@cluster0-9jh3u.mongodb.net/test?retryWrites=true"

@app.route('/')
def main():
	return render_template('index.html')
	
	
@app.route('/saveForm', methods=['POST'])
def saveForm():
	abuso = request.args.get("abuso")
	quantasvezes = request.args.get("quantasvezes")
	descricao = request.args.get("descricao")
	token = request.args.get("token")

	client = pymongo.MongoClient(dburi)
	db = client.test	
	assistsocial = db.assistsocial
	assistsocial.insert_one({ "abuso": abuso, 
						"quantasvezes": quantasvezes, 
						"descricao": descricao})
	return str(assistsocial)


@app.route('/listForm', methods=['POST'])
def listForm():	
	client = pymongo.MongoClient(dburi)
	db = client.test	
	messages = db.messages
	
	cursor = messages.find() 
	for item in cursor:
	    print(item["message"])
	return (str(cursor))