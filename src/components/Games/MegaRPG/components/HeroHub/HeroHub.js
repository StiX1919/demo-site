import React, { Component } from 'react';

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

    let dungs = <h3>Scouting</h3>;

    if(this.props.dungeons[0]){
        dungs = this.props.dungeons.map((dungeon, i) => {
            return (
                <h1 key={i}>{dungeon.name}</h1>
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