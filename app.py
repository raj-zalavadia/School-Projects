from flask import Flask, render_template, url_for, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import json
from os.path import exists

app = Flask(__name__)
app.debug = True

# sqlite config
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['JSON_SORT_KEYS'] = False

# sqlalchemy instance
db = SQLAlchemy(app, session_options={"autoflush": False})

# models
class Profile(db.Model):
	name = db.Column(db.String(64), primary_key = True)
	score = db.Column(db.Integer, unique = False, nullable = False)
	subm = db.Column(db.Integer, unique = False, nullable = False)
	def __repr__(self):
		return f"Name : {self.name}, Score: {self.score}, Submissions: {self.subm}"

@app.route('/', methods=['GET', 'POST'])
def index():
	return home()

@app.route('/index.html', methods=['GET', 'POST'])
def home():
	if not exists('site.db'):
		db.create_all()
		godr = Profile(name='Godrick', score=0, subm=0)
		renn = Profile(name='Rennala', score=0, subm=0)
		star = Profile(name='Radahn', score=0, subm=0)
		morg = Profile(name='Morgott', score=0, subm=0)
		ryka = Profile(name='Rykard', score=0, subm=0)
		mohg = Profile(name='Mohg', score=0, subm=0)
		male = Profile(name='Malenia', score=0, subm=0)
		lich = Profile(name='Lichdragon', score=0, subm=0)
		mali = Profile(name='Maliketh', score=0, subm=0)
		aste = Profile(name='Astel', score=0, subm=0)
		rega = Profile(name='Regal', score=0, subm=0)
		rada = Profile(name='Radagon', score=0, subm=0)
		godf = Profile(name='Godfrey', score=0, subm=0)
		fire = Profile(name='Fire_Giant', score=0, subm=0)
		plac = Profile(name='Placidusax', score=0, subm=0)
		db.session.add_all([godr, renn, star, morg, ryka, mohg, male,
							lich, mali, aste, rega, rada, godf, fire, plac])
		db.session.commit()

	return render_template("index.html")

@app.route('/survey.html', methods=['GET', 'POST'])
def survey():
	return render_template("survey.html")

@app.route('/boss_page.html', methods=['GET', 'POST'])
def bossPage():
	return render_template("boss_page.html")

@app.route('/boss_rankings.html', methods=['GET', 'POST'])
def rankings():
 	return render_template("boss_rankings.html")

# API

@app.route('/send_data', methods=['GET', 'POST'])
def receive_data():

	request_data = json.loads(request.data, strict=False)

	for key, value in request_data.items():
		new_val = Profile.query.filter(Profile.name==key).first().score + value
		new_sub = Profile.query.filter(Profile.name==key).first().subm + 1
		updater = Profile.query.filter(Profile.name==key).first()
		if updater:
			updater.score = new_val
			updater.subm = new_sub
			db.session.add(updater)
			db.session.commit()

	return rankings()

@app.route('/get_data', methods=['GET'])
def get_data():

	data = {

		'Godrick': 		Profile.query.filter(Profile.name=='Godrick').first().score / Profile.query.filter(Profile.name=='Godrick').first().subm,
		'Rennala': 		Profile.query.filter(Profile.name=='Rennala').first().score / Profile.query.filter(Profile.name=='Rennala').first().subm,
		'Radahn': 		Profile.query.filter(Profile.name=='Radahn').first().score / Profile.query.filter(Profile.name=='Radahn').first().subm,
		'Morgott': 		Profile.query.filter(Profile.name=='Morgott').first().score / Profile.query.filter(Profile.name=='Morgott').first().subm,
		'Rykard': 		Profile.query.filter(Profile.name=='Rykard').first().score / Profile.query.filter(Profile.name=='Rykard').first().subm,
		'Mohg': 		Profile.query.filter(Profile.name=='Mohg').first().score / Profile.query.filter(Profile.name=='Mohg').first().subm,
		'Malenia': 		Profile.query.filter(Profile.name=='Malenia').first().score / Profile.query.filter(Profile.name=='Malenia').first().subm,
		'Lichdragon': 	Profile.query.filter(Profile.name=='Lichdragon').first().score / Profile.query.filter(Profile.name=='Lichdragon').first().subm,
		'Maliketh': 	Profile.query.filter(Profile.name=='Maliketh').first().score / Profile.query.filter(Profile.name=='Maliketh').first().subm,
		'Astel': 		Profile.query.filter(Profile.name=='Astel').first().score / Profile.query.filter(Profile.name=='Astel').first().subm,
		'Regal': 		Profile.query.filter(Profile.name=='Regal').first().score / Profile.query.filter(Profile.name=='Regal').first().subm,
		'Radagon': 		Profile.query.filter(Profile.name=='Radagon').first().score / Profile.query.filter(Profile.name=='Radagon').first().subm,
		'Godfrey': 		Profile.query.filter(Profile.name=='Godfrey').first().score / Profile.query.filter(Profile.name=='Godfrey').first().subm,
		'Fire_Giant': 	Profile.query.filter(Profile.name=='Fire_Giant').first().score / Profile.query.filter(Profile.name=='Fire_Giant').first().subm,
		'Placidusax': 	Profile.query.filter(Profile.name=='Placidusax').first().score / Profile.query.filter(Profile.name=='Placidusax').first().subm
	}
	return jsonify(data)