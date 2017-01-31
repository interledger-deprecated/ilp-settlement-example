"use strict"

const request = require('superagent')

module.exports = SettlementControllerFactory

SettlementControllerFactory.constitute = []
function SettlementControllerFactory() {
  return class SettlementController {
    static init(router) {
      router.post('/settle', this.settle)
    }

    static * settle () {
      const response = yield request.post('http://wallet1.com/api/settlements', {
        settlement_method: 'b8505744-1f11-4334-853d-d97a0e92bad6',
        destination: 374392,
        amount: this.body.amount,
        currency: 'USD'
      })

      this.status = 200
      this.body = { status: 'ok' }
    }
  }
}
