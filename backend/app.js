const express = require("express");
const app = express();
const axios = require("axios");
const RAPID_API = require("./config");

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.get('/', function (req, res) {
	axios({
		"method": "GET",
		"url": "https://community-open-weather-map.p.rapidapi.com/weather",
		"headers": {
			"content-type": "application/octet-stream",
			"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
			"x-rapidapi-key": RAPID_API.apiKey,
			"useQueryString": true
		}, "params": {
			"units": req.query.units,
			"q": req.query.q,
		}
	})
		.then((response) => {
			res.send(response.data);
		})
		.catch((error) => {
			res.send({
				"cod": "404",
				"message": "city not found"
			})
		})
});

let port = process.env.PORT;
if (port == null || port === "") {
	port = 5000;
}
app.listen(port, function () {
	console.log("Server started successfully on port " + port);
});