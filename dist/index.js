
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./worm-avatar-react.cjs.production.min.js')
} else {
  module.exports = require('./worm-avatar-react.cjs.development.js')
}
