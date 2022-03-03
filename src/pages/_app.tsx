import type { AppProps } from 'next/app'
import '../styles/global.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Index from './index'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>

      <BrowserRouter>
          <Route path='/' element={<Index />} />
      </BrowserRouter>
      
    </>
  )
}

export default MyApp
