import React, { Component } from 'react'
import './SearchBarStyling.css'
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

export default class SearchBar extends Component {
  render() {
    return (
      <Navbar className='searchBar'>
        <i className="fab fa-instagram"/>
        <h1>Instagram</h1>

      </Navbar>
    )
  }
}
