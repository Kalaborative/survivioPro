from flask import Flask, render_template, request, jsonify
from api import get_recent_top_players, load_top_players
from os import environ

app = Flask(__name__)

ltp = []

# we're gonna split these AJAX calls into four groups of 5

@app.route("/", methods=["POST", "GET"])
def index():
	global ltp
	if request.method == "POST":
		selection = request.json["selection"]
		ltp = load_top_players(selection)
		# grtp = get_recent_top_players(ltp)
		return jsonify(ltp)
	return render_template("index.html")

@app.route('/loadset1', methods=["POST"])
def loadset1():
	grtp = get_recent_top_players(ltp[:5])
	return jsonify(grtp)

@app.route('/loadset2', methods=["POST"])
def loadset2():
	grtp = get_recent_top_players(ltp[5:10])
	return jsonify(grtp)

@app.route('/loadset3', methods=["POST"])
def loadset3():
	grtp = get_recent_top_players(ltp[10:15])
	return jsonify(grtp)

@app.route('/loadset4', methods=["POST"])
def loadset4():
	grtp = get_recent_top_players(ltp[15:])
	return jsonify(grtp)

if __name__ == "__main__":
	# convention to run on Heroku
	port = int(environ.get("PORT", 5000))
	# run the app available anywhere on the network, on debug mode
	app.run(host="0.0.0.0", port=port, debug=True)
