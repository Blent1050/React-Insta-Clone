import React, { Component } from 'react'
import './SearchBarStyling.css'
import {
  Form,
} from 'reactstrap';

export default class SearchBar extends Component {
  render() {
    return (
      <div className='searchBar'>
        <div className='logo'>
          <i className="fab fa-instagram"/>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/640px-Instagram_logo.svg.png'></img>
        </div>
        <div>
          <form className='search'>
          <span className="fa fa-search"/>
            <input placeholder="Search term"/>
          </form>
        </div>
        <div>
          <i className="far fa-compass"></i>
          <i className="far fa-heart"></i>
          <i className="far fa-user"></i>
        </div>
      </div>
    )
  }
}
