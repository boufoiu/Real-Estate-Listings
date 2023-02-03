import React from 'react'
import '../../../styles/Search/Search.css'
import { Outlet } from 'react-router-dom'
import SearchBar from './SearchBar'
import FilterBar from './FilterBar'

export default function Search(props) {
  return (
    <>
    <div className={'search-ctn-'+props.place}>
        <SearchBar place={props.place}/> 
        <FilterBar place = {props.place}/>
    </div>
    <Outlet/>
    </>
  )
}
