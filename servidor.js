const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000


app.use(bodyParser.urlencoded({extends:true}));
app.use(bodyParser.json());



app.get('/', (req, res)=> {
  res.send('Server on')
})

// crear celulares
app.post('/api/create',(req,res)=>{
  const {marca,modelo,sistemaOperativo} = req.body
  let nuevoCelular = Celular({
    marca,
    modelo,
    sistemaOperativo
  })

  nuevoCelular.save((error,celular)=>{
    res.status(201).send(celular)
  });

});





app.listen(PORT, () => {
  console.log('Running on port ' + PORT);
})
