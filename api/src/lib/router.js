"use strict"

const Container = require('constitute').Container
const makeRouter = require('koa-router')

const SettlementController = require('../controllers/settlement')

module.exports = class Router {
  static constitute() { return [ Container ] }
  constructor(container) {
    this.container = container
    this.router = makeRouter()
  }

  setupDefaultRoutes() {
    const settlement = this.container.constitute(SettlementController)
    settlement.init(this.router)
  }

  attach(app) {
    app.use(this.router.middleware())
    app.use(this.router.routes())
  }
}
