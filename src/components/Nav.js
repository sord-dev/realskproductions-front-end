import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Nav.module.css'

function Nav() {
  return (
    <div className={styles.nav}>
        <ul>
          <li>
            <Link href="#about">About Us</Link>
          </li>
          <li>
            <Link href="#gallery">Songs</Link>
          </li>
          <li>
            <Link href="#map">Pricing</Link>
          </li>
          <li>
            <Link href="#map">Map</Link>
          </li>
        </ul>
      </div>
  )
}

export default Nav