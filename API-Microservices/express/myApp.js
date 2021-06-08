var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));

const logger = function(req, res, next) {
	let method = req.method;
	let path = req.originalUrl;
	let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	console.log(`${method} ${path} - ${ip}`);
	next();
}

app.use(logger);

app.get("/:word/echo", (req, res) => {
	let { word } = req.params;
	res.json({echo : word});
})

app.route("/name").get((req, res) => {
	let {first, last} = req.query;
	res.json({name : `${first} ${last}`});
}).post((req, res) => {
	let {first, last} = req.body;
	res.json({name : `${first} ${last}`});
});

app.use("/public" ,express.static(__dirname + "/public"));

app.get('/now', (req, res, next) => {
	req.time = new Date().toString();
	next();
}, (req, res) => {
	res.json({time: req.time});
})

app.get("/", (req, res) => {
	res.sendFile( __dirname + "/views/index.html")
})

app.get("/json", (req, res) => {
	let message = "Hello json";
	if(process.env.MESSAGE_STYLE === "uppercase") message = message.toUpperCase();

	res.json({message});
})

module.exports = app;