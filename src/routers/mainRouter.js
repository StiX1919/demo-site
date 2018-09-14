import React from 'react'

import {Route, Switch} from 'react-router-dom'

import Home from '../components/Home/Home'
import Games from '../components/Games/Games'

export default (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/Games' component={Games}/>
        </Switch>
    )