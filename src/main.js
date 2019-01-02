import React from 'react'
import ReactDom from 'react-dom'
import 'nprogress/nprogress.css'
import './index.scss'
import Router from './router'

import FastClick from 'fastclick'
import Es6Promise from 'es6-promise'
import store from './store'

FastClick.attach(document.body)
Es6Promise.polyfill()
function test(){
  ReactDom.render(<Router store={store} />, document.getElementById('app'))
}
test();
store.subscribe(test)