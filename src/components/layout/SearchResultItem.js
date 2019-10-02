import React from 'react'

const SearchResultItem = ({ card }) => {
  return (
    <div className='item'>
      {card.text}
    </div>
  )
}

export default SearchResultItem
