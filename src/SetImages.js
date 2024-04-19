import React from 'react'

const SetImages = ( image ) => {
  return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img src={image.src.original} alt="" className="w-full"/>
    <div className="px-6 py-4">
      <div className="font-bold text-purple-500 text-xl mb-2">
        Photo by {image.photographer}
      </div>
      <ul>
        <li>
          <strong>Title: </strong>
          {image.alt}
        </li>
        
       
      </ul>
    </div>
    <div className="px-6 py-4">
   
    </div>
  </div>
  )
}

export default SetImages