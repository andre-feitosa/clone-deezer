import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'

import Options from '../components/homeOptionsComponents'
import Header from '../components/headerComponents'
import AlbumUnique from '../components/albumUniqueComponents'

function Album() {

    const router = useRouter()
    const { albuns } = router.query

    const [albunsVal, albunsState] = useState([])

    useEffect(()=>{
        let mounted = true;

        async function apiList() {
            const response = await axios.get(`https://mighty-dawn-20523.herokuapp.com/https://api.deezer.com/album/${albuns}/tracks`)
            return response.data
        }

        let loadList = async () => { 
            const valJson = [{items: await apiList()}]

            if(mounted) {
                albunsState(valJson)
            }
        }

        loadList()
        return () => mounted = false;
    })

    return (
        <>
            <Options/>
            <Header/>
            {
                albunsVal.map((item, key)=>{
                    return <AlbumUnique list={item.items} key={key}/>
                })
            }
        </>
    )
}

export default Album