// app/config/auth.js

// expose our config directly to our application using module.exports
// console.log("PROCESS ENV.....", process.env.NODE_ENV);

module.exports = require('./environment/development.js');
// module.exports = require('./environment/production.js');