import React from 'react'
import InstagramFeed from 'react-ig-feed';
import styles from '../../styles/Gallery.module.css'

const DEV_ACCESS_TOKEN =
  "IGQVJWd0ZAZAQWI2MVVlNF91ZA0E4alF3aVEtczFHcC1xQ0ZAneXhmMWpqRU51ckVtVTVTcXhKWjZAVT3IydzRzalVsOE9pNEkxUEF1d1RZAc1VnQW9NY2dyYUJKVHJCVXU2U3d2Y3loZAG1KS2lsQWFxd0o0QQZDZD";

function Gallery({title, items}) {
  return (
    <div className={styles.gallery}>
        <h2>{title}</h2>

        <div className={styles.itemList} id='gallery'>
          <InstagramFeed token={DEV_ACCESS_TOKEN} counter={items} />
        </div>

        
      </div>
  )
}

export default Gallery