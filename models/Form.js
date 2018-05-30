var mongoose = require('mongoose');

var FormSchema = new mongoose.Schema({
  
    FormTitle: String,
    FormDescription: String
  });

var Form = module.exports = mongoose.model('Form', FormSchema);

module.exports.findFormById = function(id,callback){
  Form.findById(id,callback);
}

module.exports.getFormsList = function(data,calllback){
    //parse data and get Form[i].value
}

module.exports.getFormsCount = function(data,callback){
    //size of data[]
}
module.exports.drawBars = function(data,callback){
    //use D3.js to create graphs
    //https://scrimba.com/p/pEKMsN/cast-1953
    //https://bl.ocks.org/mbostock/4061961
}

