const Message = require('./index');

const getMessages = (id, callback) => {
  Message.find({}, (err, results) => {
    if (err) {
      console.log('ERROR', err);
      const tempErr = err || 404;
      callback(tempErr);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  getMessages,
};
