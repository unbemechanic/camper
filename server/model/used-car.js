const mongoose = require('mongoose')

const usedCarSchema = new mongoose.Schema({
   name:{
       type: String,
    //    required: true,
    //    unique: true,
   },
   company:{
       type: String,
    //    required: true
   },
   type:{
    type: String,
    // required:true
   },
   license:{
    type: String,
    // required: true
   },
   passanger:{
    type: Number,
    // required:true
   },
   date:{
    type: String,
    // required: true
   },
   cost:{
    type: Number,
    // required:true
   },
   location:{
    type: String,
    // required: true
   },
   rating:{
    type: Number,
    // required:true
   }
});

const UsedCar = mongoose.model("UsedCar", usedCarSchema)
module.exports = UsedCar; 