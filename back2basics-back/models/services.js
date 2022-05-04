const mongoose = require('mongoose');

const servicesSchema = mongoose.Schema({
  name: { type: String, required: true },
  avatar: { type: String, default: 'https://picsum.photos/200' },
});

module.exports = mongoose.model('Services', servicesSchema);