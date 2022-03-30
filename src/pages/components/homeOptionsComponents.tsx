import style from '../../styles/styleComponents/homeOptions.module.css'
import deezerClone from '../../public/deezer-clone.jpg'

import MusicNoteIcon from '@material-ui/icons/MusicNote';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';

function Options(){
    return(
        <>
            <div className={style.options}>
                <img src={deezerClone.src} className={style.imgDeezer} onClick={()=>{open('http://localhost:3000/home', '_self')}} alt="Dezzer clone" />
                    <ul>
                        <li onClick={()=>{open('http://localhost:3000/home', '_self')}} style={{padding: '0 0 20px 0'}}>
                            <MusicNoteIcon />
                            Músicas
                        </li>   
                        <li onClick={()=>{open('http://localhost:3000/genres', "_self")}}>
                            <PlaylistPlayIcon />
                            Gêneros
                        </li>  
                    </ul>
                     
                <div></div>
            </div>
        </>
    )
}
export default Options