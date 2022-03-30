import Options from './components/homeOptionsComponents'
import Header from './components/headerComponents'
import Genre from './components/GenreComponents'

import { useEffect, useState } from 'react'
import axios from 'axios'

function Genres() {

    const [genreApi, genreState] = useState([])

    useEffect(()=>{
        async function apiGenres(parms) {
            const Sertanejo = await axios.get(`https://mighty-dawn-20523.herokuapp.com/https://api.deezer.com/playlist/${parms}`)

            return Sertanejo.data
        }

        async function apis() {
            const valApi = [
                {
                    title: "Sertanejo",
                    items: [await apiGenres(5207214368)],
                    img: "https://e-cdns-images.dzcdn.net/images/misc/54e4e821c4be54bbe937ccc0ab398a56/250x250-000000-80-0-0.jpg"
                },
                {
                    title: "MPB",
                    items: [await apiGenres(1082898157)],
                    img: "https://e-cdns-images.dzcdn.net/images/misc/8efc8564261302bbbe19f2aedb290c59/250x250-000000-80-0-0.jpg"
                },
                {
                    title: "Samba e Pagode",
                    items: [await apiGenres(1188698803)],
                    img: "https://e-cdns-images.dzcdn.net/images/misc/32401b85d1f77eed7d6818b762ebe8d9/250x250-000000-80-0-0.jpg"
                },
                {
                    title: "Funk",
                    items: [await apiGenres(9704281882)],
                    img: "https://e-cdns-images.dzcdn.net/images/misc/cc690e9bab058987b22179e4d17cf937/250x250-000000-80-0-0.jpg"
                },
                {
                    title: "Jazz",
                    items: [await apiGenres(1615514485)],
                    img: "https://e-cdns-images.dzcdn.net/images/misc/91468ecc5dfdd19c42a43d2cbdf27059/250x250-000000-80-0-0.jpg"
                },
                {
                    title: "Rock",
                    items: [await apiGenres(1306931615)],
                    img: "https://e-cdns-images.dzcdn.net/images/misc/b36ca681666d617edd0dcb5ab389a6ac/250x250-000000-80-0-0.jpg"
                },
                {
                    title: "Musica eletrônica",
                    items: [await apiGenres(3801761042)],
                    img: "https://e-cdns-images.dzcdn.net/images/misc/15df4502c1c58137dae5bdd1cc6f0251/250x250-000000-80-0-0.jpg"
                }
            ]

            setTimeout(()=>{
                genreState(valApi)
            }, 10)
        }

        apis()
    })

    return (
        <>
            <Options/>
            <Header/>
            <div style={{marginTop: "5em", marginLeft: "14em", position: "absolute"}}>
            {
                genreApi.map((item, key)=>{
                    return <Genre item={item} key={key} title={item.title} image={item.img}/>
                })
            }
            </div>
        </>
    )
}

export default Genres