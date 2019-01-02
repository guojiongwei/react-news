import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import store from 'store'
import './Home.scss'
export default class Home extends Component {
  constructor(props) {
    super(props)
    console.log(store)
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
        我是首页{store.getState().todoCart}
        <button onClick={e => {this.props.history.push('/kind')}}>去分类页面</button>
        <button onClick={this.test.bind(this)}>提交</button>
      </div>
    )
  }
}