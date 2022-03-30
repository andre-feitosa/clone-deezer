import { useMemo, useState } from 'react'

import NavigateBeforeOutlinedIcon from '@material-ui/icons/NavigateBeforeOutlined';
import NavigateNextOutlinedIcon from '@material-ui/icons/NavigateNextOutlined'
import PlayArroyOutlined from '@material-ui/icons/PlayArrowOutlined'
import PauseOutlined from '@material-ui/icons/PauseOutlined'
import styles from '../../styles/styleComponents/musicsComponent.module.css'

interface AppProps {
    title: any,
    key: any,
    list: any
}

function Musics(props: AppProps) {

    const [iconAudio, iconAudioState] = useState(true)

    const [margin, marginState] = useState(0)
    const [urlMp3, urlState] = useState()
    const [titleMusic, titleState] = useState()

    const audio = useMemo(() => new Audio(urlMp3), [urlMp3])

    const totalPlayMusic = Math.floor((audio.currentTime / audio.duration) * 100) + '%'

    const secondCurrentMusic = Math.floor(audio.currentTime % 60)
    const minuteCurrentMusic = Math.floor(audio.currentTime / 60)

    const secondDurationtMusic = Math.floor(audio.duration % 60)
    const minuteDurationMusic = Math.floor(audio.duration / 60)

    const leftArrow = () => {
        let val = margin + 1000
        if(val > 0) {
            val = 0
        } 

        marginState(val)
    }

    const rightArrow = () => {
        let val = margin - 1000

        marginState(val)
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

    const swapUrl = (parms: any, title: any) => {
        urlState(parms) 
        titleState(title)

        audio.pause();
        iconAudioState(true)
        
    }

    return (
        <>
            <div className={styles.musics}>
                <div className={styles.listMusic}>
                    
                <div className={styles.movieRowLeft} onClick={leftArrow}>
                    <NavigateBeforeOutlinedIcon  />
                </div>

                <div className={styles.movieRowRight} onClick={rightArrow}>
                    <NavigateNextOutlinedIcon  />
                </div>

                <div className={styles.titulo}>
                    {props.title}
                </div>

                <div className={styles.playlist} style={{marginLeft: margin}}>
                    <div className={styles.roler}>
                    {
                    props.list.map((item: any, key: any)=>{
                        return (
                            <div key={key} className={styles.list}>
                                <img className={styles.image} src={`${item.album.cover_medium}`} onClick={() => swapUrl(item.preview, item.title)} alt="" />
                                <p  className={styles.italico} style={{color: "white", cursor: "pointer"}} onClick={() => swapUrl(item.preview, item.title)}>{item.title}</p>
                                <i>De {item.artist.name}</i>
                            </div>
                        )})
                    }
                    </div>
                </div>
            </div>

            <div className={styles.playerMusic}>
                <div className={styles.allPlayer}>
                    <div className={styles.line}></div>
                        <div className={styles.titleMusic}>
                            Tocando - {titleMusic}
                        </div>

                        <div  className={styles.playMusic} onClick={()=> clickPlay()}>       
                            {
                                iconAudio ? <PlayArroyOutlined /> : <PauseOutlined />
                            }
                        </div>

                        <div className={styles.initTime}>
                        {
                            secondCurrentMusic < 10 ? `0${minuteCurrentMusic}:0${secondCurrentMusic}` : `${minuteCurrentMusic}:${secondCurrentMusic}`
                        }
                        </div>

                        <div className={styles.bar}>
                            <progress value={0} max={1} className={styles.progress} style={{width: totalPlayMusic}}></progress>
                            </div>
                        <div className={styles.endTime}>

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

export default Musics

