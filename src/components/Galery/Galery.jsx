import React from 'react'
import "./Galery.css"

export default function galery({anime}) {
  




  return (


    
    <figure key={anime.cardnumber}>
    
    
      <figcaption className="c-films-image">
        <img className="c-films-image__size" src={anime.image_url} alt=""/>
      </figcaption>
    </figure>
  )
}
