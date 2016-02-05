var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextId = 1;

// Middleware - everytime json request come in express is going to parse it and
// it can be accessed via request.body
app.use(bodyParser.json());

app.get('/todos', function (req, res) {
	res.json(todos);
});


app.get('/', function (req, res) {
	res.send('Todo API Root');
});

app.get('/todos/:id', function (req, res) {
	var todoId = parseInt(req.params.id, 10);
	var matchingTodo;

	todos.forEach(function (todo) {
		if (todo.id === todoId) {
			matchingTodo = todo;
		}
	});

	if(matchingTodo) {
		res.json(matchingTodo);
	} else {
		res.status(404).send();
	}
});

app.post('/todos', function (req, res) {
	var body = req.body;

	body.id = todoNextId++;

	todos.push(body);

	res.json(body);
});

app.listen(PORT, function () {
	console.log('Express listening on port ' + PORT + '!');
});