import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Map.module.css'

function Map({ notice }) {
  return (
    <div className={styles.map} id="map">
          <h1>Map // Loco</h1>

          <div className={styles.mapBox}>
            <Image
              src={"/sklogo.png"}
              width={1250}
              height={600}
              alt="site logo"
            />

            <div>
              <h1> {notice} </h1>
            </div>
          </div>
        </div>

  )
}

export default Map