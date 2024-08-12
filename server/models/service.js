const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
   heading: {
      type: String,
      required: true
   },
   subheading: {
      type: String,
   },
   desc: {
      type: String,
   },
   image: {
      type: String,
   },
   bulletin:{
      type: [String]
   },
   isAvailable: {
      type: Boolean,
      default: true
   },
},
   {
      timestamps: true
   })

module.exports = mongoose.model('Service', serviceSchema)