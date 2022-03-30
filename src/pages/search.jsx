import Options from './components/homeOptionsComponents'
import Header from './components/headerComponents'
import SearchComp from './components/searchComponent'

import axios from 'axios'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function Search() {

    let router = useRouter()
    let { q } = router.query

    const [ search, searchState ] = useState([])

    useEffect(()=>{
        async function teste() {
                const response = await axios.get(`https://mighty-dawn-20523.herokuapp.com/https://api.deezer.com/search?q=${q}`)
                return response.data
        }

        let apiSearch = async () => { 
            const valJson = [{items: await teste()}]

            searchState(valJson)
        }
        
        apiSearch()
    })

    return (
        <>
            <Options />
            <Header />
            {
                search.map((obj, key)=>{
                    return <SearchComp key={key} list={obj}/>
                })
            }
        </>
    )
    
}

export default Search
