import React, { Component } from 'react';
import axios from 'axios'

import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import './HeroHub.css';

import CharacterBox from '../AdventureScreen/AScomponents/CharacterBox/CharacterBox'

import {getDungeons} from '../../../../../ducks/heroReducer'


class HeroHub extends Component {
  constructor(props) {
    super()
    this.state = {
      shop: false,
      skills: false,
      skillView: false,
      skillArr: []
    }
    this.openShop = this.openShop.bind(this)

  }
  componentDidMount() {
    if(!this.props.heroes[0]){
        window.location.href= '/#/Games/MegaRPG'
    } else
    this.props.getDungeons(this.props.currentHero.hero_id)
    
  }

  openShop() {
    if(this.state.shop === true){
      this.setState({shop: false})
    } else this.setState({shop: true})
  }

  openSkillView() {
    if(this.state.skillView === true){
      this.setState({skillView: false})
    } else this.setState({skillView: true})
  }

  render() {
      console.log(this.props.dungeons)
    let inventory = <h3>Empty</h3>
    if (this.props.currentInventory[0]){
        inventory = this.props.currentInventory.map(item => {
            console.log(item,this.props.inventory)
            return <div className="inventoryItems">
                <h3>{item.name}</h3>
                <button onClick={() => this.equipItem(item)}>Equip</button>
                </div>
        })}
        {console.log(this.props.currentHero, 'top hero pors')}


    let dungs = <h3>Scouting</h3>;

    if(this.props.dungeons[0]){
        dungs = this.props.dungeons.map(dungeon => {
            return (
                <h1>{dungeon.name}</h1>
            )
        })
    }

    return (
    <div className='page'>

        <CharacterBox />
        {/*add location here*/}
        <div>
            <h1>Available Dungeons</h1>
            {dungs}
        </div>

    </div>
    );
  }
}
// not today!
const mapStateToProps = state => ({...state.heroReducer, ...state.userReducer})

export default withRouter(connect(mapStateToProps, {getDungeons})(HeroHub));