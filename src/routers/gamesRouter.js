import React from 'react'

import {Route, Switch} from 'react-router-dom'

//RPG links
import MegaRPG from '../components/Games/MegaRPG/Landing'
import CreateCharacter from '../components/Games/MegaRPG/components/CreateCharacter/CreateCharacter'
import CharacterSelect from '../components/Games/MegaRPG/components/CharacterSelect/CharacterSelect'

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