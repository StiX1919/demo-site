import React from 'react'

import {Route, Switch} from 'react-router-dom'

import Landing from '../components/Landing/Landing'

export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/Home' component={Landing}/>
        </Switch>
    )
    // <Route path='/CharacterSelect' component={CharacterSelect}/>
    // <Route path='/CreateCharacter' component={CreateCharacter}/>