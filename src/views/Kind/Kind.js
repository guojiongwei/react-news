import React, { Component } from 'react'
import ReactDom from 'react-dom'
import './Kind.scss'
import store from 'store'
export default class Kind extends Component {
  goBack() {
    this.props.history.goBack()
  }
  test() {
    store.dispatch({
      type: 'ADD_CART',
      data: '22222222'
    })
  }
  render() {
    return (
      <div>
        我是分类页面
        <button onClick={this.goBack.bind(this)}>haha</button>
        <button onClick={this.test.bind(this)}>提交</button>
      </div>
    )
  }
}