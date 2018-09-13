import React from 'react'

import {Route, Switch} from 'react-router-dom'

import Landing from '../components/Landing/Landing'
import CreateCharacter from '../components/CreateCharacter/CreateCharacter'

export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/Home' component={Landing}/>
        <Route path='/CreateCharacter' component={CreateCharacter}/>
        </Switch>
    )
    // <Route path='/CharacterSelect' component={CharacterSelect}/>