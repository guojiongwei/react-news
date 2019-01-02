import React from 'react'
import ReactDom from 'react-dom'
import 'nprogress/nprogress.css'
import './index.scss'
import Router from './router'
ReactDom.render(
            <Router/>
, document.getElementById('app'))