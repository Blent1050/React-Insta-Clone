import React, { Component } from 'react'
import './SearchBarStyling.css'
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Form,
  Input
} from 'reactstrap';

export default class SearchBar extends Component {
  render() {
    return (
      <Container className='searchBar'>
        <i className="fab fa-instagram"/>
        <h1>Instagram</h1>
        <Form>
          <Input type="text" placeholder="&#xF002; Search" />
        </Form>
        <i class="far fa-heart"></i>
        <i class="far fa-user"></i>
      </Container>
    )
  }
}
