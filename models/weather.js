const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const weatherSchema = new Schema({
  image:{
    type : String,
    required : true
  },
  climate: {
    type: String,
    //required: true
  },
  land: {
    type: String,
   // required: true
  }
});

module.exports = mongoose.model('weather', weatherSchema);