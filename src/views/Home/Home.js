import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Home.scss'
export default class Home extends Component {
  constructor(props) {
    super(props)
    console.log(this)
  }
  render() {
    return (
      <div>
        我是首页
        <button onClick={e => {this.props.history.push('/user')}}>去分类页面</button>
      </div>
    )
  }
}