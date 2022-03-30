import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useMemo, useState } from "react"
import PlayArroyOutlined from '@material-ui/icons/PlayArrowOutlined'
import PauseOutlined from '@material-ui/icons/PauseOutlined'

import Options from '../components/homeOptionsComponents'
import Header from '../components/headerComponents'
import style from "../../styles/styleComponents/genreComponents.module.css"

function Teste() {
    const router = useRouter()
    const { genre } = router.query

    const [resultado, resultadoState] = useState([])

    const [titleMusic, titleState] = useState()
    const [urlMp3, urlState] = useState()
    const [iconAudio, iconAudioState] = useState(true)

    const audio = useMemo(() => new Audio(urlMp3), [urlMp3])

    const totalPlayMusic = Math.floor((audio.currentTime / audio.duration) * 100) + '%'

    const secondCurrentMusic = Math.floor(audio.currentTime % 60)
    const minuteCurrentMusic = Math.floor(audio.currentTime / 60)

    const secondDurationtMusic = Math.floor(audio.duration % 60)
    const minuteDurationMusic = Math.floor(audio.duration / 60)

    useEffect(()=>{
        async function listApi() {
            const res = await axios.get(`https://mighty-dawn-20523.herokuapp.com/https://api.deezer.com/playlist/${genre}/tracks`)

            resultadoState(res.data.data)
            console.log(res.data.data)
        }

        listApi()
    })

    const swapUrl = (parms: any, title: any) => {
        urlState(parms) 
        titleState(title)
        
        audio.pause();
        iconAudioState(true)
        
    }

    function clickPlay() {
        if (iconAudio) {
            audio.play()
            iconAudioState(false)
        } else {
            audio.pause();
            iconAudioState(true)
        }
    }

    return (
        <>
            <Options/>
            <Header/>
            <div className={style.body}>
                {
                    resultado.map((item: any, key:any)=>{
                        return (
                            <div style={{color: "white"}} onClick={()=>{swapUrl(item.preview, item.title)}} className={style.maps}>
                                <img src={item.album.cover_medium} alt="" />
                                <p>{item.title}</p>
                                <p><i>De {item.artist.name}</i></p>
                            </div>
                        )
                    })
                }
            </div>

            <div className={style.player}>
            <div className={style.playerMusic}>
                <div className={style.allPlayer}>
                    <div className={style.line}></div>
                        <div className={style.titleMusic}>
                            Tocando - {titleMusic}
                        </div>

                        <div  className={style.playMusic} onClick={()=> clickPlay()}>       
                            {
                                iconAudio ? <PlayArroyOutlined /> : <PauseOutlined />
                            }
                        </div>

                        <div className={style.initTime}>
                        {
                            secondCurrentMusic < 10 ? `0${minuteCurrentMusic}:0${secondCurrentMusic}` : `${minuteCurrentMusic}:${secondCurrentMusic}`
                        }
                        </div>

                        <div className={style.bar}>
                            <progress value={0} max={1} className={style.progress} style={{width: totalPlayMusic}}></progress>
                        </div>
                        
                        <div className={style.endTime}>

                        {
                            secondDurationtMusic ? <i>{minuteDurationMusic}:{secondDurationtMusic}</i> : <i>00:00</i>
                        }
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Teste