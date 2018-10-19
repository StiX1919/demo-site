import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import { SocialIcon } from 'react-social-icons'

import './Footer.css'


class Footer extends Component {
    constructor() {
      super()
      this.state = {
        links: ['Home', 'About', 'Tech', 'Projects']
      }
    }
  

    //note for notes sake
  
    render() {
        let location = window.location.pathname.split('/').join('')
        if(location === ''){
            location = 'Home'
        }

      let links = this.state.links.map((link, i) => {
  
        return (
          <Link key={i} to={`/${link}`} className='footerLinks'>
            
            <h1 style={location !== link ? null : {color: 'white', border: 'none', backgroundColor: 'none'}} className={i === 0 ? 'nav1' : i === this.state.links.length -1 ? 'finalNav' : 'midNav'}>{link}</h1>
          </Link>
        )
      })
      return (
          <tabs className='tabs'>
            {links}
          </tabs>
      );
    }
  }
  
  export default Footer;