const mongoose = require('mongoose');
const Services = require('./services');

const widgetsSchema = mongoose.Schema({
  name: { type: String, required: true },
  avatar: { type: String, default: 'https://picsum.photos/200' },
  service: { type: mongoose.Schema.Types.ObjectId, ref: 'Services' },
});

module.exports = mongoose.model('Widgets', widgetsSchema);