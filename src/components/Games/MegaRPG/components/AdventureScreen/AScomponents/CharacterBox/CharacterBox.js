import React, { Component } from 'react';
// import axios from 'axios'

import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import './CharacterBox.css';

import StatBox from './cbComponents/StatBox/StatBox'
import Equipment from './cbComponents/equipment/equipment'
import Inventory from './cbComponents/Inventory/Inventory'

import {statModifier, beatMonster, levelUp, getWeaponExp, selectHero} from '../../../../../../../ducks/heroReducer'
import { getDemoCharacter } from '../../../../../../../ducks/userReducer'

import {attack} from '../../../../../../../ducks/monsterReducer'


class CharacterBox extends Component {
    constructor(){
        super()
        this.state = {
            hero: null,
            equipment: null,
            invOpen: false
        }

        this.setHero = this.setHero.bind(this)
        this.attacking = this.attacking.bind(this)
    }
    componentDidMount() {
        if(this.props.heroes[0]){
            this.setHero()
        } else
        window.location.href= '/#/Games/MegaRPG'
    }

    async setHero(hero, direction, statType) {
        try {
            await this.props.statModifier(hero, direction, statType)
            await this.setState({hero: this.props.currentHero, equipment: this.props.currentEquipment})
        } catch(err) {
            console.log(err)
        }
        
    }
    
    attacking(monster, hero, buffObj) {
        let power = hero.hero_str + buffObj.str - monster.defense
        let newHP = monster.HP -= power
        if(power < 0){
            return console.log('no power')
        }
        
        if(newHP <= 0) {
            this.props.beatMonster(monster, this.props.exp, this.props.gold)
        } else if(this.state.equipment.weapon !== 'empty'){
            console.log('hit with weapon')
            this.props.getWeaponExp(this.state.equipment.weapon, this.props.abilities)
            let newMon = Object.assign({}, monster, {HP: newHP})       
            this.props.attack(newMon)
        }
        else {
            let newMon = Object.assign({}, monster, {HP: newHP})  
            this.props.attack(newMon)
        }
    }

    openInventory() {
        this.setState({invOpen: !this.state.invOpen})
    }
      

    render() {
        let hero = this.props.currentHero

        // let liveEquipment = 'Loading...'
        // if(this.state.equipment) {
        //     liveEquipment = Object.keys(this.state.equipment).map(item => {
        //         return <Equipment type={item} equipObj={this.state.equipment[item]}/>
        //     })
        // }

        // let inventory = <h3>Empty</h3>
        // if (this.props.currentInventory[0]){
        //     inventory = this.props.currentInventory.map(item => {
        //         return <Inventory item={item} equipment={this.state.equipment} remount={this.setHero}/>
        //     })}
        
        // let buffs = {str: 0, def: 0, spd: 0}
        // if(this.state.equipment) {
        //     Object.keys(this.state.equipment).map((item, index) => {
        //         buffs.str += this.state.equipment[item].pwr ? this.state.equipment[item].pwr : 0
        //         buffs.def += this.state.equipment[item].def ? this.state.equipment[item].def : 0
        //         buffs.spd += this.state.equipment[item].spd ? this.state.equipment[item].spd : 0
        //     }) 
        // }

        return (
            
            <div className='charBox'>
                {hero ? 
                    <div>
                        <div>
                            <h3>{hero ? hero.hero_name : 'nameless'}</h3>
                            <h4>Level: {hero.hero_level}</h4>
                            <h3>HP: {hero.hero_hp}</h3>
                
                            {hero.hero_exp >= this.props.nextLevel &&
                                <button onClick={() => this.props.levelUp(this.props.exp, this.props.level, this.props.nextLevel, this.props.currentHero)}>Level Up</button>
                            }
                            <h4>EXP: {hero.hero_exp}/{this.props.nextLevel}</h4>
                            <h4>Gold: {hero.gold}</h4>
                            
                        </div>
                        
                        <h3>Extra Stats: {hero ? hero.extra_stats : 0}</h3>

                        <StatBox statType='Strength' statModifier={this.setHero} currStat={hero.strength} statsLeft={hero ? hero.extra_stats : 0}/>
                        <StatBox statType='Endurance' statModifier={this.setHero} currStat={hero.endurance} statsLeft={hero ? hero.extra_stats : 0}/>
                        <StatBox statType='Speed' statModifier={this.setHero} currStat={hero.speed} statsLeft={hero ? hero.extra_stats : 0}/>
                        <StatBox statType='Intelligence' statModifier={this.setHero} currStat={hero.intelligence} statsLeft={hero ? hero.extra_stats : 0}/>
                    </div>
                : null}
                
                
            </div>
        )
    }

}   
const mapStateToProps = state => ({...state.heroReducer, ...state.monsterReducer, ...state.userReducer})

export default withRouter(connect(mapStateToProps, {statModifier, levelUp, attack, beatMonster, levelUp, getWeaponExp, getDemoCharacter, selectHero})(CharacterBox));
