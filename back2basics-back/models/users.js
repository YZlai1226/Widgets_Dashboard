const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Widgets = require('./widgets');

const usersSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  avatar: { type: String, default: 'https://picsum.photos/200' },
  widgets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Widgets' }],
  account_active: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

usersSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Users', usersSchema);
