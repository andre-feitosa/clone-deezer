import { Router } from 'express'
import axios from 'axios'
import AxiosComponent from '../src/pages/components/axios' 

const router = Router()

router.get('/', (req, res)=>{
   //const AxiosResponse = await axios.get(`https://connect.deezer.com/oauth/access_token.php?app_id=529802&secret=c59dbf330c7b20350cea6fb5040a91df&code=${req.query.code}`)

   //const replaceP = await AxiosResponse.data.replace(/=|&/g, ' ')
   //const splitP = await replaceP.split(' ')

   //const AxiosRest = await axios(`https://api.deezer.com/user/me?access_token=${splitP[1]}`)

   console.log(req.query)
})

export default router