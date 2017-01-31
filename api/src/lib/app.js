"use strict"

const co = require('co')
const Koa = require('koa.io')
const cors = require('kcors')
const Router = require('./router')

module.exports = class App {
  static constitute() { return [ Router ] }
  constructor(router) {
    this.router = router

    const app = this.app = new Koa()

    app.use(function *(next) {
      if (this.request.method === 'POST' || this.request.method === 'PUT') {
        // the parsed body will store in this.request.body
        // if nothing was parsed, body will be an empty object {}
        this.body = this.request.body
      }
      yield next
    })

    app.use(cors({origin: '*'}))

    app.proxy = true

    router.setupDefaultRoutes()
    router.attach(app)
  }

  start() {
    co(this._start.bind(this)).catch(err => {
      console.log('app:35', err)
    })
  }

  * _start() {
    this.listen()
  }

  listen() {
    this.app.listen(3300)
    console.log('public at http://localhost:3300')
  }
}
