import React from 'react';
import { useState } from 'react';

const Card = ({ value }) => {
  const [img, setImg] = useState(true);
  const handleClick = () => {
    setImg(!img)
  }
  return (
    <div className='api'>
      <h2>{value.title}</h2>
      <a href={value.url}>Original Link</a>
      <img src={img ? value.images.original.url : value.images.original_still.url} alt={value.title} onClick={handleClick} />
    </div>
  )
}

export default Card