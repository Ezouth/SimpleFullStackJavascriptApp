import React from 'react';
import {
  Navbar,
  NavLink,
   } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Navbar>
          <NavLink href="/page1">Page 1____   </NavLink>
          <NavLink href="/page2">    __Page 2</NavLink>

        </Navbar>
      </div>
    );
  }
}
