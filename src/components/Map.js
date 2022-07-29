import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Map.module.css'

function Map({ notice }) {
  return (
    <div className={styles.map} id="map">
          <h2>Map // Loco</h2>

          <div className={styles.mapBox}>
            <Image
              src={"/sklogo.png"}
              width={1250}
              height={600}
              alt="site logo"
            />

            <div>
              <h3> {notice} </h3>
            </div>
          </div>
        </div>

  )
}

export default Map