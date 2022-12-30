import React from 'react'

export default function FilterSearch(props) {
    const {
        name,
        options
    } = props
    return (
    <div className='filter-div'>
        {name}
        <select>
            {options.map(option=>(
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
    </div>
  )
}
