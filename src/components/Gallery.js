import React from 'react'
import InstagramFeed from 'react-ig-feed';
import styles from '../../styles/Gallery.module.css'


function Gallery({title, items}) {
  return (
    <div className={styles.gallery}>
        <h2>{title}</h2>

        <div className={styles.itemList} id='gallery'>
          <InstagramFeed token={process.env.INSTAGRAM_USER_TOKEN} counter={items} />
        </div>

        
      </div>
  )
}

export default Gallery