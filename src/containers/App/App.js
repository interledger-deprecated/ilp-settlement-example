import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import classNames from 'classnames/bind'
import styles from './App.scss'
const cx = classNames.bind(styles)

@connect(
  state => ({
  }),
  {})
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {
    return (
      <div className={cx('container')}>
        <div className={cx('appContent')}>
          asd
          {this.props.children}
          asd
        </div>
      </div>
    )
  }
}
