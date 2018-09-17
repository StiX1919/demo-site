import React, { Component } from 'react';

import {SketchPicker} from 'react-color'
import {Link} from 'react-router-dom'
import axios from 'axios'

import Pixel from './components/Pixel/Pixel'
import './PixelArt.css';

class PixelArt extends Component {
  constructor(){
    super()
    this.state = {
      color: '#FFFFFF',
      height: 20,
      width: 20,
      pixSize: 20,

      pixelArr: [],
      newHeight: 20,
      newWidth: 20,

      border: true
    }
    this.handleColorChange=this.handleColorChange.bind(this)
    this.modifyPixels = this.modifyPixels.bind(this)
    this.choosePixColor = this.choosePixColor.bind(this)

    this.handleChangeHeight=this.handleChangeHeight.bind(this)
    this.handleChangeWidth=this.handleChangeWidth.bind(this)
    this.handlePixSize=this.handlePixSize.bind(this)

    this.updateTable=this.updateTable.bind(this)

    this.toggleBorder = this.toggleBorder.bind(this)
  }

  componentDidMount(){
    this.modifyPixels()
  }
  
  modifyPixels(){
    console.log('hello')
    let oldArr = this.state.pixelArr.slice()
    let pixelArr = []
    
        
        if(oldArr[0]){
          for(let i = 0, c = 0, r = 0; i < this.state.width*this.state.height; i++){
            let matchArr = oldArr.filter(item => (item.cInd === c && item.rInd === r))
            if(c < this.state.width){
              if(matchArr[0] && matchArr[0].color !== '#FFFFFF'){
                console.log(matchArr, 'matched')
                pixelArr.push(Object.assign({}, matchArr[0], {cInd: c, rInd: r}))
                c++
              } else {
                pixelArr.push({cInd: c, rInd: r, color: '#FFFFFF'})
                c++
              }
            } else {
              c = 0
              r ++
              i--
            }

          }
        }
        else 
          for(let c = 0; c < this.state.width; c++){
            for(let r = 0; r < this.state.height; r++){
              pixelArr.push({cInd: c, rInd: r, color: '#FFFFFF'})
            }
          }
        console.log(oldArr, pixelArr)
    
        this.setState({pixelArr})
  }

  handleColorChange(e){
    console.log(e)
    this.setState({color: e.hex})
  }

  async handleChangeHeight(value){
    if(Number(value) > 50){
      await this.setState({newHeight: 50})
    } else
      await this.setState({ newHeight: Number(value) })
  }
  async handleChangeWidth(value){
    if(Number(value) > 50){
      await this.setState({newWidth: 50})
    } else
      await this.setState({ newWidth: Number(value) })
  }


  choosePixColor(color, index, arr){
    let newArr = arr

    newArr[index].color = color
    console.log(newArr[index])
    this.setState({pixelArr: newArr})
  }

  handlePixSize(value){
    if(Number(value) > 20){
      this.setState({pixSize: 20})
    } else
    this.setState({pixSize: Number(value)})
  }


  async updateTable(event){
    console.log(event.key)
    if(event.key === 'Enter'){
      await this.setState({width: this.state.newWidth, height: this.state.newHeight})
      this.modifyPixels()

    }
  }

  toggleBorder(){
    this.setState({border: !this.state.border})
  }
  

  render() {
    console.log(this.state)

    return (
      <div className="PixelArt">

        <Link to='/Games'><h1>Back to Games</h1></Link>
        
        <div className='colorChooser'>

        
            <div className='PixelBox'>
                <div className='columns' style={{width: this.state.border ? (this.state.pixSize*this.state.width +(this.state.width * (1))) + 'px' : (this.state.pixSize*this.state.width) + 'px',
                                                height: this.state.border ? (this.state.pixSize*this.state.height+(this.state.height * (1))) + 'px': (this.state.pixSize*this.state.height) + 'px'}}> 
                    {this.state.pixelArr.map((pix, i, arr) => {
                        return <Pixel key={i} 
                        pixel={pix} 
                        position={`${pix.cInd}x${pix.rInd}`} 
                        index={i} 
                        pixSize={this.state.pixSize}
                        color={this.state.color}
                        allArr={arr}
                        chooseColor={this.choosePixColor}
                        border={this.state.border}
                        />
                    })}
                </div>
                <div>
                    <h3>Height:</h3><input type='number' value={this.state.newHeight} placeholder={this.state.height} onChange={(e) => this.handleChangeHeight(e.target.value)} onKeyDown={this.updateTable}/>
                    <h3>Width:</h3><input type='number' value={this.state.newWidth} placeholder={this.state.width} onChange={(e) => this.handleChangeWidth(e.target.value)} onKeyDown={this.updateTable}/>
                    <h3>Pixel Size:</h3><input type='number' value={this.state.pixSize} placeholder={20} onChange={(e) => this.handlePixSize(e.target.value)}/>
                    <button onClick={this.toggleBorder}>Toggle Borders</button>
                </div>  
            </div>
        
            <SketchPicker color={this.state.color} onChangeComplete={(e) => this.handleColorChange(e)} />

        </div>
        
        
      </div>
    );
  }
}

// {this.state.widthArr.map((box, i) => {
//   return <WidthBox key={i} heightArr={this.state.heightArr} pixSize={this.state.pixSize} widthIndex={i} chosenColor={this.state.color}/>
// })}

// width: this.state.pixSize === 20 ? (this.state.pixSize*this.state.width +(this.state.width * (1))) + 'px' : (this.state.pixSize*this.state.width) + 'px',
// height: this.state.pixSize === 20 ? (this.state.pixSize*this.state.height+(this.state.height * (1))) + 'px' : (this.state.pixSize*this.state.height) + 'px'
export default PixelArt;
