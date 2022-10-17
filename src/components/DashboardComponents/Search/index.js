import React from 'react';
import './styles.css';
import  SearchRoundedIcon  from '@mui/icons-material/SearchRounded';

function Search() {
  return (
    <div className='search-wrapper'>
      <div className='search-input'>
        <SearchRoundedIcon />
        <input type= "text" placeholder="Search" />
      </div>
    </div>
  )
}

export default Search