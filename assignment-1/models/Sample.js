var mongoose = require('mongoose');
var SampleSchema = new mongoose.Schema({
  _id: String,
  value: Number,
},
{
    collection: 'homeless_count_collection'
});
mongoose.model('Sample', SampleSchema);