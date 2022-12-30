import React from 'react'
import './styles/SearchBar.css'
import FilterSearch from './FilterSearch'

export default function SearchBar() {
  const filters = [{name:"Transaction",options:["Vente","Location"]},
                   {name: "Bien", options:["Appartement","Villa", "Garage"]},
                   {name: "Wilaya", options:["Tizi Ouzou", "Alger"]}];
  return (
    <div className='search-bar'>
    {filters.map(filter=>{
      return <FilterSearch name = {filter.name} options = {filter.options}></FilterSearch> 
    })}
    <div className='search-button'>
      <div className='search-icon'></div>
    </div>
    </div>
  )
}
