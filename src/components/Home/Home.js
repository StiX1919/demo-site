import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import { SocialIcon } from 'react-social-icons'

import './Home.css'
class Home extends Component {
  constructor() {
    super()
    this.state = {
      links: ['Home', 'About', 'Tech', 'Projects']
    }
  }


  render() {
    let links = this.state.links.map((link, i) => {

      return (
        <Link key={i} to={`/${link}`}>
          <h1 className={i === 0 ? 'nav1' : i === this.state.links.length -1 ? 'finalNav' : 'midNav'}>{link}</h1>
        </Link>
      )
    })
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

        <tabs className='tabs'>
          {links}
        </tabs>
      </div>
    );
  }
}

export default Home;