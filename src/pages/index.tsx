import type { NextPage } from 'next'
import React from 'react'

import styles from '../styles/index.module.css'
import deezerImg from '../public/deezer-clone.jpg' 
import RegisterComp from './components/indexRegisterComponent'

const Home: NextPage = () => {
  return (
    <div className={styles.title}>
      <img className={styles.img1} onClick={()=>open("http://localhost:3000/")} src={deezerImg.src} alt="Logo Deezer"/>
      <p>
        <strong>
          Aproveite a <br/> 
          melhor e mais fácil experiência <br/>
          de áudio. <br/>
          Só na Deezer. 
        </strong>
      </p>
    <div className={styles.gradient}></div>
    <RegisterComp />
    <footer className={styles.footer}>
      <img className={styles.img3} src="https://play.google.com/intl/en_us/badges/static/images/badges/pt-br_badge_web_generic.png" alt="" />

      <img className={styles.img4} src="https://e-cdns-files.dzcdn.net/cache/images/unlogged/common/storebadges/appstore-badge-pt-BR.8c15379db4a2ff3da769cddb4b2da074.svg" alt="" />

      <img className={styles.img2} src={deezerImg.src} alt="Logo Deezer" />
      
    </footer>  
    </div>
  )
}

export default Home
