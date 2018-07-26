const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World Again!'))

app.listen(3000, () => {
    console.log('Running on port '+ PORT)
});
