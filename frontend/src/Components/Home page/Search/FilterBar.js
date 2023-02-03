import React from 'react'
import '../../../styles/Search/FilterBar.css'

export default function FilterBar(props) {
  const filters = [{name:"Transaction",options:["Vente","Location"]},
                   {name: "Bien", options:["Appartement","Villa", "Garage"]},
                   {name: "Wilaya", options:["Tizi Ouzou", "Alger"]}];
  return (
    <>
      <input type={'checkbox'} id='filter-check'/>
      <div className={'filter-bar-'+props.place}>
      {filters.map(filter=>{
        return( 
          <div className='filter-div'>
              <select>
                  {filter.options.map(option=>(
                      <option className='filter-option' key={option} value={option}>{option}</option>
                  ))}
              </select>
          </div>)
      })}
      <div className='search-button'>
        Appliquer
      </div>
      </div>
    </>
  )
}
