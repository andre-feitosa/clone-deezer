import PauseOutlined from '@material-ui/icons/PauseOutlined'
import PlayArroyOutlined from '@material-ui/icons/PlayArrowOutlined'
import { useMemo, useState } from 'react'

import style from '../../styles/styleComponents/albumUnique.module.css'

interface AppProps {
    list: any,
    key: any
}

function AlbumUnique(props: AppProps) {

    const [titleMusic, titleState] = useState()
    const [urlMp3, urlState] = useState()
    const [iconAudio, iconAudioState] = useState(true)
    
    const audio = useMemo(() => new Audio(urlMp3), [urlMp3])

    const totalPlayMusic = Math.floor((audio.currentTime / audio.duration) * 100) + '%'

    const secondCurrentMusic = Math.floor(audio.currentTime % 60)
    const minuteCurrentMusic = Math.floor(audio.currentTime / 60)

    const secondDurationtMusic = Math.floor(audio.duration % 60)
    const minuteDurationMusic = Math.floor(audio.duration / 60)

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

            <div className={style.body}>
                    {
                        props.list.data.map((obj: any, key: any)=> {
                            return(
                            <div key={key} className={style.maps}>
                                <p style={{color: "white", cursor: "pointer"}} onClick={()=>swapUrl(obj.preview, obj.title)}>{obj.title}</p>
                                <i >De {obj.artist.name}</i>
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

export default AlbumUnique