import { response, Router } from 'express'
import axios from 'axios'
import fetch from 'node-fetch';

const router = Router()

router.get('/', async (req, res)=>{
  const AxiosRest = await axios.get('https://api.deezer.com/chart/0/tracks')
  return res.json(AxiosRest.data)
})

export default router