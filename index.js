const express = require('express'); 
const bodyParser = require('body-parser');

const app = express();
const port = 3005;

let recipes = [];


// middleware 
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json()); 

app.get('/', (req, res) => {
	res.send('TESTTESTnow');
});

app.post('/recipes', (req, res) => {

	// recipe text to thus URI your databases here (form action? maybe.)
	const recipe = req.body;
	
});

app.listen(port, () => console.log('is your kitchen automatic? no. good. ${port} !')); 



// CODING RESOURCES / SOURCES:
// setting up basics: https://stackabuse.com/building-a-rest-api-with-node-and-express/

