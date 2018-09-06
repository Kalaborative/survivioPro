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
	grtp = get_recent_top_players(ltp[15:20])
	return jsonify(grtp)

@app.route('/loadset5', methods=["POST"])
def loadset5():
	grtp = get_recent_top_players(ltp[20:25])
	return jsonify(grtp)

@app.route('/loadset6', methods=["POST"])
def loadset6():
	grtp = get_recent_top_players(ltp[25:30])
	return jsonify(grtp)

@app.route('/loadset7', methods=["POST"])
def loadset7():
	grtp = get_recent_top_players(ltp[30:35])
	return jsonify(grtp)

@app.route('/loadset8', methods=["POST"])
def loadset8():
	grtp = get_recent_top_players(ltp[35:40])
	return jsonify(grtp)

@app.route('/loadset9', methods=["POST"])
def loadset9():
	grtp = get_recent_top_players(ltp[40:45])
	return jsonify(grtp)

@app.route('/loadset10', methods=["POST"])
def loadset10():
	grtp = get_recent_top_players(ltp[45:50])
	return jsonify(grtp)

@app.route('/loadset11', methods=["POST"])
def loadset11():
	grtp = get_recent_top_players(ltp[50:55])
	return jsonify(grtp)

@app.route('/loadset12', methods=["POST"])
def loadset12():
	grtp = get_recent_top_players(ltp[55:60])
	return jsonify(grtp)

@app.route('/loadset13', methods=["POST"])
def loadset13():
	grtp = get_recent_top_players(ltp[60:65])
	return jsonify(grtp)

@app.route('/loadset14', methods=["POST"])
def loadset14():
	grtp = get_recent_top_players(ltp[65:70])
	return jsonify(grtp)

@app.route('/loadset15', methods=["POST"])
def loadset15():
	grtp = get_recent_top_players(ltp[70:75])
	return jsonify(grtp)

@app.route('/loadset16', methods=["POST"])
def loadset16():
	grtp = get_recent_top_players(ltp[75:80])
	return jsonify(grtp)

@app.route('/loadset17', methods=["POST"])
def loadset17():
	grtp = get_recent_top_players(ltp[80:85])
	return jsonify(grtp)

@app.route('/loadset18', methods=["POST"])
def loadset18():
	grtp = get_recent_top_players(ltp[85:90])
	return jsonify(grtp)

@app.route('/loadset19', methods=["POST"])
def loadset19():
	grtp = get_recent_top_players(ltp[90:95])
	return jsonify(grtp)

@app.route('/loadset20', methods=["POST"])
def loadset20():
	grtp = get_recent_top_players(ltp[95:])
	return jsonify(grtp)




if __name__ == "__main__":
	# convention to run on Heroku
	port = int(environ.get("PORT", 5000))
	# run the app available anywhere on the network, on debug mode
	app.run(host="0.0.0.0", port=port, debug=True)
