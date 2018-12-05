import React, { Component } from 'react';
import './About.css';
import me from './me.jpg';

class About extends Component {
  render() {
    return (
          <div className="row">
          <div className="col-6">
        <p className="About"> Hello! </p>
        <p className="About"> This page is simply intended to demonstrate my ability to create a multi-paged react application. However, </p>
        <p className="About">since you're here I would like to mention that I am extremely excited at an opportunity to work with Solstice. </p>
         <p className="About">I am a passionate and enthusiastic individual who is deeply concerned with environmental conservation; I believe</p>
         <p className="About">that my values line up with Solstice's very well. Renewable energy is humanity's best hope for a positive future,</p>
        <p className="About">and I hope that you give me the incredible opportunity to be part of the solution. Thank you so much! </p>

        <p className="About"> To return to the graphs, simply click on the home link at the top of this page. </p>
        </div>
        <div className="col-6">
        <img id="me" src={me} alt="logo"/>
        </div>
        </div>
    );
  }
}

export default About;
