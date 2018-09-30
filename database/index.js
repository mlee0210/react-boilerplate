const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/messages');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('connected to db');
});

const messageSchema = mongoose.Schema({
  message: String,
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
