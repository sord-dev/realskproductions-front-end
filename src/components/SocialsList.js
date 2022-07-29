import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../../styles/SocialList.module.css'

const width = 40
const height = 40

function SocialsList() {
  return (
    <div className={styles.socialList}>
        <Link href={'mailto:realskproductions@gmail.com'} ><Image src='/SocialsList/gmail.svg' alt='email icon link' height={height} width={width} /></Link>
        <Link href={'https://www.instagram.com/realskproductions/'} ><Image src='/SocialsList/instagram.svg' alt='instagram icon link' height={height} width={width} /></Link>
        <Link href={'https://www.snapchat.com/add/realskprod?share_id=zD5bjooDD58&locale=en-GB'} ><Image src='/SocialsList/snapchat.svg' alt='snapchat icon link' height={height} width={width} /></Link>
        <Link href={'https://www.youtube.com/channel/UCwdTrf45fyXB_Bhpn0V-Alg'} ><Image src='/SocialsList/youtube.svg' alt='youtube icon link' height={height} width={width} /></Link>
        <Link href={'https://www.beatstars.com/realskproductions'} ><Image src='/SocialsList/beatstars.svg' alt='beatstars icon link' height={height} width={width} /></Link>

    </div>
  )
}

export default SocialsList