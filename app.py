from flask import Flask, render_template, request, jsonify
from api import get_recent_top_players, load_top_players
from os import environ

app = Flask(__name__)

@app.route("/", methods=["POST", "GET"])
def index():
	if request.method == "POST":
		selection = request.json["selection"]
		ltp = load_top_players(selection)
		grtp = get_recent_top_players(ltp)
		return jsonify(grtp)
	return render_template("index.html")

if __name__ == "__main__":
	# convention to run on Heroku
	port = int(environ.get("PORT", 5000))
	# run the app available anywhere on the network, on debug mode
	app.run(host="0.0.0.0", port=port, debug=True)
