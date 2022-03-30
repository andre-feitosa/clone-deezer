import express from 'express'
import router from './router'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(router)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(3001, ()=>{
    console.log('Server rodando na porta: 3001')
})