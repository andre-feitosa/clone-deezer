import axios from "axios"
import { response } from "express"
import { useRouter } from "next/router"
import { Component, useEffect, useState } from "react" 

function AxiosComponent() {
    var router = useRouter()
    var { code } = router.query
    
    axios.get('http://localhost:3001/', { params: {
        code: code
    }})

    return (
        <>
        </>
    ) 
}

export default AxiosComponent 