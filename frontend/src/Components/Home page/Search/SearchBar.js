import React from 'react'
import '../../../styles/Search/SearchBar.css'

export default function SearchBar(props) {
  return (
    <div className={'search-bar-'+props.place}>
        <input type={'text'} className='search-input' placeholder='Rechercher un bien, une adresse..'/>
        <button className='search-bar-button'>Rechercher</button>
        <button className='filter-check-button'><label for = 'filter-check'><i class="fa-solid fa-filter"></i></label></button>
    </div>
  )
}
