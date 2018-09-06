import requests
import json
from datetime import datetime
from time import sleep

def load_top_players(gamemode):
	"""Loads all top players specifying gamemode as a string. ACCEPTS solo, duo, or squad."""
	lb_payload = {
		"type": "kpg",
		"interval": "daily",
		"maxCount": 100
	}

	lb_payload['teamMode'] = gamemode

	leaderboard_url = "http://surviv.io/api/leaderboard"
	r = requests.get(leaderboard_url, params=lb_payload)
	response = r.json()
	return response[:20]

def get_recent_top_players(response):
	"""Returns a sorted list of recent top players given a JSON response."""
	recent_top_players = []
	user_payload = {
		"offset": 0,
		"count": 10,
		"modeFilter": 7
	}
	for player in response:
		user_payload['slug'] = player["slug"]
		stats_url = "http://surviv.io/api/match_history"
		r = requests.get(stats_url, params=user_payload)	
		res = r.json()

		dt_format = "%Y-%m-%dT%X.%fZ"
		first_game = res[0]["end_time"]

		now = datetime.utcnow()
		first_game_endtime = datetime.strptime(first_game, dt_format)

		last_played_timedelta = now - first_game_endtime
		last_played_mins = round(last_played_timedelta.seconds / 60)
		if last_played_mins < 60:
			recent_top_players.append([player['username'], player['val'], last_played_mins, player['slug']])
		sleep(1)
	if len(recent_top_players) > 0:
		recent_top_sorted = sorted(recent_top_players, key=lambda f: f[2])
	else:
		recent_top_sorted = []
	return recent_top_sorted
