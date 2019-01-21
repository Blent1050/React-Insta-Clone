import React from 'react'
import styled from 'styled-components';

const SearchBarStyling = styled.div`
.search {
  position: relative;
  color: #aaa;
  font-size: 16px;
}

.search input {
  width: 200px;
  height: 32px;
  background: #fcfcfc;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.search input { text-indent: 70px;
}
.search .fa-search { 
  display: inline;
  position: relative;
  left:65px;
}

.searchBar{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin: 25px 0;
    justify-content: space-between;
}
.searchBar div{
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.searchBar img{
  width: 120px;
  
}
.logo img{
  margin-left: 10px;
  padding-left: 10px;
  border-left: 1px solid rgba(128, 128, 128, 0.482);
}
`
export default function SearchBar(props) {
  return (
    <SearchBarStyling>
    <div className='searchBar'>
      <div className='logo'>
        <i className="fab fa-instagram"/>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/640px-Instagram_logo.svg.png' alt='Instagram'></img>
      </div>
      <div>
        <form className='search'>
          <span className="fa fa-search"/>
            <input
            type='text' 
            name='searchInput' 
            onChange={props.handleChange} 
            value={props.searchInput} 
            placeholder="Search term"/>
          </form>
      </div>
      <div>
        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <i className="far fa-user"></i>
      </div>
    </div>
    </SearchBarStyling>
  )
}

