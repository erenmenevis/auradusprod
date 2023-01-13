import React from 'react'
import styles from "../styles/LabelList.module.css"
import LabelCard from './LabelCard';

export default function LabelList(props) {
  const { categories, images } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.squareGrid}>
        
        {categories.map((category) => {
          const img = images.find((img) => img.tags.includes(category)); 
          return(
          
          <div key={category} >
            <LabelCard title={category} src={img.url} />
          </div>
        )
      })
        }
      </div>
    </div>
  )
}
