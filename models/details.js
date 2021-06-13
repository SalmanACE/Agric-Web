const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const detailsSchema = new Schema({
  seed: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  climate: {
    type: String,
    required: true
  },
  land: {
    type: String,
    required: true
  },
  Landimage :{
    type : String ,
    required : true
  },
  desc: {
    type: String,
    required: true
  },
  market: {
    type: String,
    required: true
  },
  fertilizer: {
    type: String,
    required: true
  },
  natural: {
    type: String,
    required: true
  },
  irrigation: {
    type: String,
    required: true
  },
  harvesting: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('Details', detailsSchema);