import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import styles from '../styles/Home.module.css'


export default function BSCarousel({images}) {



  return (
    <div style={{ display: 'flex',alignItems: 'center' ,maxWidth: 700, margin:0, padding:0 }}>
    <Carousel>
    {images.map((image) =>
            <Carousel.Item key={image.id}>
            <img style={{width: '100%', maxWidth: '700px', height: 'auto'}}
              className="d-block"
              src={image.url}
              alt={image.id}
            />
          </Carousel.Item>
          )}
    
    </Carousel>
    </div>
  )
}
