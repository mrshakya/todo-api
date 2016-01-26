var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'Meet friend for lunch',
	completed: false
}, {
	id: 2,
	description: 'Go shopping',
	completed: false
}, {
	id: 3,
	description: 'Pick up grocery',
	completed: true
}];

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

app.listen(PORT, function () {
	console.log('Express listening on port ' + PORT + '!');
});