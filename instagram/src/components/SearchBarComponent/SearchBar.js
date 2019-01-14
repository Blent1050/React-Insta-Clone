import React, { Component } from 'react'
import './SearchBarStyling.css'
import {
  Form,
} from 'reactstrap';

export default class SearchBar extends Component {
  render() {
    return (
      <div className='searchBar'>
        <i className="fab fa-instagram"/>
        <h1>Instagram</h1>
        <Form className='search'>
        <span className="fa fa-search"/>
          <input placeholder="Search term"/>
        </Form>
        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <i className="far fa-user"></i>
      </div>
    )
  }
}
