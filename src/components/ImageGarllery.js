import React from 'react'
import '../ImagesGrallery.css'
import { useState } from 'react'
const ImageGrallery = ({ imageData }) => {
   
    return(<>
      <div className="images-wrapper">
        {imageData.map((image) => (
             <div className='image'　key={image.id}>
            <a href={image.pageURL} target='"_blank'>
              <img src={image.largeImageURL} alt=''/>
            </a>
         </div>
        ))}
      </div>
    </>)
}

export default ImageGrallery
