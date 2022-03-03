import React, { Component, useState } from 'react'

import style from '../../styles/styleComponents/homeOptions.module.css'
import deezerClone from '../../public/deezer-clone.jpg'
import iconMusicCoral  from '../../public/icon-music-coral.jpg'
import iconMusicBranco from '../../public/icon-music-branco.jpg'

//const [image, imageOver] = useState(iconMusicCoral.src)
//onMouseOver={()=>imageOver(iconMusicBranco.src)} onMouseOut={()=>imageOver(iconMusicCoral.src)}

function Options(){
    return(
        <>
            <div className={style.options}>
                <img src={deezerClone.src} className={style.imgDeezer} alt="Dezzer clone" />
                    <ul>
                        <li style={{color: '#ef5466'}}>
                            <img src={iconMusicCoral.src} className={style.imgIcon}  alt="" />
                            Música
                        </li>     
                    </ul>
                     
                <div></div>
            </div>
        </>
    )
}
export default Options