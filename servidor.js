const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Celular = require('./mongoosePhone')
const PORT = process.env.PORT || 3000


app.use(bodyParser.urlencoded({extends:true}));
app.use(bodyParser.json());

app.get('/', (req, res)=> {
  res.send('Server on')
})

app.listen(PORT, () => {
  console.log('Running on port ' + PORT);
})
