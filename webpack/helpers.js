const path = require('path');

module.exports = {
  root: (...args) => path.resolve(process.cwd(), ...args)
};
