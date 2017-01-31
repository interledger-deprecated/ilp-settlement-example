require('babel-polyfill')

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development']

module.exports = Object.assign({
  host: 'localhost',
  port: 3030,
  apiHost: 'localhost',
  apiPort: '3300'
}, environment)
