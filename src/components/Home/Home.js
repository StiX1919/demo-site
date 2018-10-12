import React, { Component } from 'react';

import { SocialIcon } from 'react-social-icons'
import Footer from '../Footer/Footer'

import './Home.css'
class Home extends Component {



  render() {
  
    return (
      <div>
        <img className='background' src='https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-HD-wallpaper-backgrounds-PIC-WPD0013526.jpg' alt='main-pic'/>
        <div className='title'>
          <h1 className='name'>Spencer Smith</h1>
          <h3 className='job'>Full Stack Web Developer</h3>
          <div id='titleBreak'></div>
          <div className='socialLinks'>
            <SocialIcon className='my-social-icon facebook' url='https://www.facebook.com/spencer.smith.940098' color='currentColor'/>
            <SocialIcon className='my-social-icon twitter' url='https://twitter.com/devspencersmith' color='currentColor'/>
            <SocialIcon className='my-social-icon linkedIn' url='https://www.linkedin.com/in/devspencersmith/' color='currentColor'/>
            <SocialIcon className='my-social-icon gitHub' url='https://github.com/StiX1919' color='currentColor'/>
            </div>
          </div>
      </div>
    );
  }
}

export default Home;