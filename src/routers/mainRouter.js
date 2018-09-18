import React from 'react'

import {Route, Switch} from 'react-router-dom'

import Home from '../components/Home/Home'
import Games from '../components/Games/Games'

export default (
        <Switch>
            <Route path='/Games' component={Games}/>    
            <Route path='/Home' component={Home}/>
            <Route path='/' component={Home}/>
        </Switch>
    )