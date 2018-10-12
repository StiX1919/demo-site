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
  
  
    render() {
        console.log(window.location.pathname)
      let links = this.state.links.map((link, i) => {
  
        return (
          <Link key={i} to={`/${link}`}>
            
            <h1 style={this.props.location === link ? {height: '13vh', bottom: '0', color: 'yellow', backgroundColor: 'purple'}: null} className={i === 0 ? 'nav1' : i === this.state.links.length -1 ? 'finalNav' : 'midNav'}>{link}</h1>
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