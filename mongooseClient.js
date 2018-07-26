const mongoose = require('mongoose');
let url = 'mongodb://gbery:Envisiongb2@ds235411.mlab.com:35411/cintaroja'
mongoose.connect(url)

//Genera ids de mongo
const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId

const alumnoSchema = new Schema({
    alumno:ObjectId,
    nombre:String,
    apellidos:String,
    edad:Number
})

const storeItem = new Schema({
    item:ObjectId,
    nombre:String,
    precio:Number,
    existencia:Boolean,
    descripcion: String  
})

const ticket = new Schema({
    ticket:ObjectId,
    rfc:Number,
    subTotal:Number,
    iva: Number,
    total: Number
})

//creates a new collection named Alumno
var Alumno = mongoose.model('Alumno',alumnoSchema)
var Item = mongoose.model('Item', storeItem)
var Ticket = mongoose.model('Ticket', ticket)

module.exports = {Alumno, Item, Ticket}

//google populate