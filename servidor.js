const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const Celular = require('./mongooseClient');
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/celulares', (req,res)=>{
        Alumno.find().exec()
            .then(celular=> res.send(celular))
            .catch(err => res.send(err))
    });

app.get('/api/celulares/:uid', (req,res)=>{
    let {uid} = req.params;
    Celular.findById(uid).exec()
        .then(celular => res.send(celular))
        .catch(err => res.send(err))
});

app.listen(3000, () => {
    console.log('Running on port '+ PORT)
});

