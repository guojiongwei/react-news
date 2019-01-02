import React from 'react'
import {Route, Switch, Redirect, HashRouter, BrowserRouter} from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'
import asyncComponent from './asyncComponent'
const _import_views = file => asyncComponent(() => import(`views/${file}`))
const pageTransitionsFn = status => {
    let obj = {}
    if (status === 'left' || status === 'top') {
        obj = {
            atEnter: {offset: 100},
            atLeave: {offset: -100},
            atActive: {offset: 0}
        }
    }else if (status === 'right' || status === 'bottom'){
        obj = {
            atEnter: {offset: -100},
            atLeave: {offset: 100},
            atActive: {offset: 0}
        }
    }else{
        obj = {
            atEnter: {offset: 0},
            atLeave: {offset: 0},
            atActive: {offset: 0}
        }
    }
    return obj
}
const mapStyleFn = status => styles => {
    let obj = {}
    if (status === 'left' || status === 'right') {
        obj = { transform: `translateX(${styles.offset}%)`}
    }else if (status === 'top' || status === 'bottom'){
        obj = { transform: `translateY(${styles.offset}%)`}
    }
    return obj
}
class Router extends React.Component {
  componentDidMount() {
    console.log(this)
  }
  render () {
      return (
              <BrowserRouter>
                <Switch>
                  <Route render={ ({location, history}) => {
                      history.action == 'POP' ? history.slideStatus = 'right' : history.slideStatus='left'
                      const pageTransitions = pageTransitionsFn(history.slideStatus)
                      const mapStyle = mapStyleFn(history.slideStatus)
                      history.slideStatus = false
                      return (
                        <AnimatedSwitch className="animate-wrapper" {...pageTransitions} runOnMount={location.pathname === '/'} mapStyles={mapStyle}>
                            <Route exact path='/' component={_import_views('Home/Home')} />
                            <Route path='/kind' component={_import_views('Kind/Kind')} />
                            <Route path='/cart' component={_import_views('Cart/Cart')} />
                            <Route path='/user' component={_import_views('User/User')} />
                        </AnimatedSwitch>
                      )
                  }}/>
                  </Switch>
              </BrowserRouter>
      )
      
  }
}
export default Router