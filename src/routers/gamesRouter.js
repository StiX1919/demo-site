import React from 'react'

import {Route, Switch} from 'react-router-dom'

//RPG links
import MegaRPG from '../components/Landing/Landing'
import CreateCharacter from '../components/CreateCharacter/CreateCharacter'
import CharacterSelect from '../components/CharacterSelect/CharacterSelect'

//Pixart links
import PixelArt from '../components/Games/PixelArt/PixelArt'

import Games from '../components/Games/Games'

export default (
        <Switch>
            <Route path='/Games/MegaRPG/CharacterSelect' component={CharacterSelect}/>
            <Route path='/Games/MegaRPG/CreateCharacter' component={CreateCharacter}/>
            <Route path='/Games/MegaRPG' component={MegaRPG}/>
            
            <Route path='/Games/PixelArt' component={PixelArt}/>
        </Switch>
    )