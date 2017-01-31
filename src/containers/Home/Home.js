import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import { settle } from 'redux/actions/settlement'

import classNames from 'classnames/bind'
import styles from './Home.scss'
const cx = classNames.bind(styles)

@connect(
  state => ({
  }), { settle })
export default class Home extends Component {
  static propTypes = {

  }

  handleSubmit = e => {
    e.preventDefault()

    this.props.settle({ value: this.refs.amount.value })
  }

  render() {
    const { } = this.props

    return (
      <div className={cx('row', 'Home')}>
        <form onSubmit={this.handleSubmit}>
          <div className={cx('col-sm-1')}>
            Amount
          </div>
          <div className={cx('col-sm-3')}>
            <input type="text" className={cx('form-control')} ref="amount" />
          </div>
          <div className={cx('col-sm-1')}>
            <button type="submit" className={cx('btn', 'btn-success', 'btn-block')}>Settle</button>
          </div>
        </form>
      </div>
    )
  }
}
