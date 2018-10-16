import React from 'react'

import {Route, Switch} from 'react-router-dom'

import Home from '../components/portfolio/Home/Home'
import Games from '../components/Games/Games'
import Tech from '../components/portfolio/Tech/Tech'
import About from '../components/portfolio/About/About'
import Projects from '../components/portfolio/Projects/Projects'

export default (
        <Switch>
            <Route exact path='/Games' component={Games}/>   
            <Route path='/Projects' component={Projects}/> 
            <Route path='/Tech' component={Tech}/> 
            <Route path='/About' component={About}/>  
            <Route path='/Home' component={Home}/>
            <Route exact path='/' component={Home}/>
        </Switch>
    )