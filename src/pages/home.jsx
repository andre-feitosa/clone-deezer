import React, { useEffect, useState } from 'react'

import Options from './components/homeOptionsComponents'
import Header from './components/headerComponents'
import Music from './components/musicComponents'
import Playlist from './components/playlistComponents'
import { apiMusic, apiAlbuns } from './_apiMusic'

const Cadastro = ()=>{

    const [musics, musicsState] = useState([])
    const [albuns, albunsState] = useState([])

    useEffect(()=>{
        const loadPlaylist = async ()=>{
            let list = await apiAlbuns()

            albunsState(list)
        }
        const loadMusic = async ()=>{
            let list = await apiMusic()

            musicsState(list)
        }

        loadPlaylist()
        loadMusic()
    })

    return(
        <>

            <div>
                <Options/>
                <Header />
                {
                    albuns.map((obj, key)=>{
                        return <Playlist title={obj.title} key={key} list={obj.items.data.data}/>
                    })
                }
                {
                    musics.map((obj, key)=>{
                        return <Music title={obj.title} key={key} list={obj.items.data.data}/>
                    })
                }
            </div> 
        </>
    )
}

export default Cadastro