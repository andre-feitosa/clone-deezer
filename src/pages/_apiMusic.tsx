import axios from "axios"

async function listMusic() {
    const apiNode = await axios.get(`http://localhost:3001/`)
    return apiNode
}

async function listAlbuns() {
    const apiNode = await axios.get('https://mighty-dawn-20523.herokuapp.com/https://api.deezer.com/chart/0/albums')
    return apiNode
}

export let apiMusic = async () => [
    {
        title: "Musicas mais ouvidas",
        items: await listMusic()
    }
]

export let apiAlbuns = async () => [
    {
        title: "Albuns mais populares",
        items: await listAlbuns()
    }
]
