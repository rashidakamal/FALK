const express = require('express'); 
const bodyParser = require('body-parser');
const cors = require('cors'); 

const app = express();
const port = 3005;

app.use(cors);

// middleware 
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json()); 

app.get('/', (req, res) => {
	res.send('TESTTEST');
});

app.listen(port, () => console.log('is your kitchen automatic? no. good. ${port} !')); 



// CODING RESOURCES / SOURCES:
// setting up basics: https://stackabuse.com/building-a-rest-api-with-node-and-express/