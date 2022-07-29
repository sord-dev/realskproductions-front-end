import React from 'react'
import InstagramFeed from 'react-ig-feed';
import styles from '../../styles/Gallery.module.css'

const DEV_ACCESS_TOKEN =
  "IGQVJVc0tPZA3hRRG9qVFdyeVJJNmpfQXYxcXZAXRnlDS0p1UEY4QnpiZAllPVmRhMWtzckRwUGpqbTJpNWVxZAHJiWVVybVB2dXhyVTJOR2F4MlB2bHFfbGpFdVQ0MXV6dHQ4SXVOR3RKNkl4WVVJUGJlVQZDZD";

function Gallery() {
  return (
    <div className={styles.gallery}>
        <h1>Gallery</h1>

        <div className={styles.itemList} id='gallery'>
          <InstagramFeed token={DEV_ACCESS_TOKEN} counter="8" />
        </div>

        
      </div>
  )
}

export default Gallery