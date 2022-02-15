const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const travelSchema = new Schema({
  country: {type:String, require: true},
  city: {type:String, require: true},
  completed: {type:Boolean, default:false},
  description: {type:String, default:'This was the best trip ever!'},
  tasks: [{type:Boolean,type: String, default:false}],
  notes:[{type: String, default:'This is a NOTE!'}]
})

module.exports = model('Travel', travelSchema)
