import React, { Component } from 'react';
import './WorldMap.css';

import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import { getMap, updateArea } from '../../../../../ducks/mapReducer'


class WorldMap extends Component {
  constructor(){
    super()
    this.state = {
      currentX: 3,
      currentY: 3,

      prevX: 1,
      prevY: 1,

      areaX: 1,
      areaY: 1,

      map:[]
    }
    this.buildMap = this.buildMap.bind(this)
    this.move = this.move.bind(this)
    
  }
  componentDidMount(){
      
      this.buildMap()
      this.refs.areaMap.focus()
  }
  componentDidUpdate(prevProps, prevState) {
      const {areaX, areaY} = this.state
    if(prevState.areaX !== areaX || prevState.areaY !== areaY){
      this.buildMap()
    }
  }


  buildMap(){
    let map = [];
    let currRow = [];
    console.log(this.props.areaMap)
    for(let row = this.state.areaY * 10, col = -9 + (this.state.areaX * 10); row > -10 + (this.state.areaY * 10); col++){
    
        let discovered = this.props.areaMap.filter(spot => {
            return spot.x_location === col && spot.y_location === row
        })
        if(!discovered[0]){
            discovered = null
        }

      if(col === 10 * this.state.areaX){
        if(discovered !== null){
            let color = this.colorGen(discovered[0].area_type)
            console.log(discovered[0].area_type, color)


            currRow.push({
                x: discovered[0].x_location,
                y: discovered[0].y_location,
                type: discovered[0].area_type,
                name: discovered[0].area_name,
                discovered_by: discovered[0].discovered_by,
                color
            })
            map.push(currRow)
            
            currRow = []
            
            col = -10 + (this.state.areaX * 10);
            row--
        } else {
            currRow.push({x: col, y: row});
            map.push(currRow)
    
            currRow = []
    
            col = -10 + (this.state.areaX * 10);
            row--
        }
      } else {
          if(discovered !== null){
            let color = this.colorGen(discovered[0].area_type)
            
            console.log(discovered[0].area_type, color)

            currRow.push({
                x: discovered[0].x_location,
                y: discovered[0].y_location,
                type: discovered[0].area_type,
                name: discovered[0].area_name,
                discovered_by: discovered[0].discovered_by,
                color
            })
          } else {
              currRow.push({
                  x: col, 
                  y: row,
                  type: undefined,
                  name: undefined,
                  discovered_by: undefined
                })

          }
      }
    }
    this.setState({map: map})
  }

  colorGen(place) {
    switch(place){
        case 'Town': 
            return 'grey';
        case 'Plain': 
            return 'light green';
        case 'Forest': 
            return 'forest green';
        case 'Water':
            return 'light blue'
        default: return 'white'
    }
  }

  move(e){
    switch(e.key){
      case 'ArrowRight':
          this.setState({prevX: this.state.currentX, prevY: this.state.currentY, currentX: this.state.currentX + 1})
      
          if(this.state.currentX + 1 > this.state.areaX * 10) {
            this.setState({areaX: this.state.areaX + 1})
            this.props.getMap(this.state.areaX + 1, this.state.areaY)
            this.props.updateArea(this.state.areaX + 1, this.state.areaY)
          }
          break;
      case 'ArrowLeft':
          this.setState({prevX: this.state.currentX, prevY: this.state.currentY, currentX: this.state.currentX - 1})

          if(this.state.currentX - 1 < ((this.state.areaX - 1) * 10) + 1) {
            this.setState({areaX: this.state.areaX - 1})
            this.props.getMap(this.state.areaX - 1, this.state.areaY)
            this.props.updateArea(this.state.areaX - 1, this.state.areaY)
          }
          break;
      case 'ArrowUp':
          this.setState({prevX: this.state.currentX, prevY: this.state.currentY, currentY: this.state.currentY + 1})

          if(this.state.currentY + 1 > this.state.areaY * 10) {
            this.setState({areaY: this.state.areaY + 1})
            this.props.getMap(this.state.areaX, this.state.areaY + 1)
            this.props.updateArea(this.state.areaX, this.state.areaY + 1)
          }
          break;
      case 'ArrowDown':
          this.setState({prevX: this.state.currentX, prevY: this.state.currentY, currentY: this.state.currentY - 1})
          
          if(this.state.currentY - 1 < ((this.state.areaY - 1) * 10) + 1) {
            this.setState({areaY: this.state.areaY - 1})
            this.props.getMap(this.state.areaX, this.state.areaY - 1)
            this.props.updateArea(this.state.areaX, this.state.areaY - 1)
          }
          break;
      default: return null
    }
  }

  render() {
      console.log(this.props)
    return (
      <div ref='areaMap' onKeyDown={this.move} tabIndex='-1'>
        {this.state.map[0] && 
          this.state.map.map((row, r) => {
            return (
              <div className='row'>
              {row.map((spot, j) => {
                return (
                  <div style={{height: '50px', width: '50px', border: 'solid black 1px', backgroundColor: spot.color}}>
                    {spot.x === this.state.currentX && spot.y === this.state.currentY 
                      ? <img style={{height: '50px', width: '50px'}} src='https://s1.piq.land/2015/07/23/wyTJ7WMj9DgDrDoJ3xYODfGq_400x400.png' alt='hello'/>
                      : <h6>{spot.name}</h6>
                    }
                  </div>
                )
              })}

              </div>
            )
          })
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({...state.heroReducer, ...state.mapReducer})

export default withRouter(connect(mapStateToProps, { getMap, updateArea })(WorldMap));