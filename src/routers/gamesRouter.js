import React from 'react'

import {Route, Switch} from 'react-router-dom'

import Landing from '../components/Landing/Landing'
import CreateCharacter from '../components/CreateCharacter/CreateCharacter'
import CharacterSelect from '../components/CharacterSelect/CharacterSelect'

export default (
        <Switch>
            <Route path='/Games/MegaRPG' component={Landing}/>
            <Route path='/Games/MegaRPG/CreateCharacter' component={CreateCharacter}/>
            <Route path='/Games/MegaRPG/CharacterSelect' component={CharacterSelect}/>
        </Switch>
    )