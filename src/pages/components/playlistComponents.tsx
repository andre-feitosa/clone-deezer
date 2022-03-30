import styles from '../../styles/styleComponents/playlistComponents.module.css'

import { useState } from 'react'
import NavigateBeforeOutlinedIcon from '@material-ui/icons/NavigateBeforeOutlined';
import NavigateNextOutlinedIcon from '@material-ui/icons/NavigateNextOutlined'
import Link from 'next/link';

interface AppProps {
    key: any,
    title: any,
    list: any
}

function Playlist(props: AppProps) {

    const urlLink = 'album'

    const [margin, marginState] = useState(0)

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

    return (
        <>
            <div className={styles.Playlist}>
                <p>{props.title}</p>

                <div className={styles.movieRowLeft} onClick={leftArrow}>
                    <NavigateBeforeOutlinedIcon  />
                </div>

                <div className={styles.movieRowRight} onClick={rightArrow}>
                    <NavigateNextOutlinedIcon />
                </div>

                <div className={styles.linetest} style={{marginLeft: margin}}>
                    <div className={styles.playlistLine}>
                        {
                            props.list.map((item: any, key: any)=>{
                                return (
                                    <div key={key} className={styles.listPlaylist}>
                                            <Link href='/[album]/[albuns]' as={`/album/${item.id}`} >
                                                <img className={styles.image} src={`${item.cover_medium}`} alt="" />
                                            </Link>
                                            <p>
                                                <Link href='/[albuns]' as={`/${item.id}`} >   
                                                    <a  className={styles.italico} style={{color: "white", cursor: "pointer"}} >{item.title}</a>
                                                </Link> 
                                            </p>
                                            <p><i >De {item.artist.name}</i></p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Playlist