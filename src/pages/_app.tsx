import '../styles/global.css'

import { ChallangesContext, ChallangesProvider } from '../contexts/ChallangesContext'
import { Children } from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <ChallangesProvider>
       <Component {...pageProps} />
     </ChallangesProvider>
  )
}

export default MyApp
