import express from 'express'
import router from './router'

const app = express()

app.use(router)
app.use(express.json())
express.urlencoded({ extended: true })

app.listen(3001, ()=>{
    console.log('Server rodando na porta: 3001')
})