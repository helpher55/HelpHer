from flask import Flask, Response, request, render_template
import pymongo
import json, datetime
from bson.json_util import dumps


app = Flask(__name__)
app.config['TEMPLATES_AUTO_RELOAD'] = True

@app.route('/')
def main():
	return render_template('index.html')


dburi = "mongodb+srv://admin:adminhelpher@cluster0-9jh3u.mongodb.net/test?retryWrites=true"	
	
@app.route('/saveForm', methods=['POST'])
def saveForm():
	abuso = request.args.get("abuso")
	quantasvezes = request.args.get("quantasvezes")
	descricao = request.args.get("descricao")
	token = request.args.get("token")

	client = pymongo.MongoClient(dburi)
	db = client.test	
	assistsocial = db.assistsocial
	assistsocial.insert_one({"abuso": abuso, 
						"quantasvezes": quantasvezes, 
						"descricao": descricao,
						"timestamp": datetime.datetime.utcnow()})
	return str(assistsocial)


@app.route('/listForm', methods=['POST'])
def listForm():	
	client = pymongo.MongoClient(dburi)
	db = client.test	
	assistsocial = db.assistsocial
	cursor = assistsocial.find().sort("timestamp", -1) 
	return dumps(cursor)