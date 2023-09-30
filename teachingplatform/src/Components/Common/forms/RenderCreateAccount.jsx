import React from 'react'
  import Header from '../heading/Header'
import CreateAccount from './CreateAccount'
import Footer from '../footer/Footer'
import { GitHub, LinkedIn,Facebook,Twitter, Instagram, FacebookRounded } from '@mui/icons-material'


const RenderCreateAccount = () => {
  
  return (
    <>
        <Header/>
        <CreateAccount/>
        <div className='FooterBody  border-t-2 '>
<footer class=" from-gray-100 via-[#bce1ff] to-gray-100 ">
  <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
      <img src="https://th.bing.com/th/id/OIP.RkTe9PnZIwAwO5r2ryLqpwAAAA?pid=ImgDet&rs=1" class="mr-5 h-6 sm:h-9" alt="logo" />
        <p class="max-w-xs mt-4 text-sm text-gray-600">
          One of the best Elearning Platform for all kinds of Students
        </p>
        <div class="flex mt-8 space-x-6 text-gray-600">
          <a class="hover:opacity-75" href target="_blank" rel="noreferrer">
            <span class="sr-only"> Facebook </span>
           <FacebookRounded/>
          </a>
          <a class="hover:opacity-75" href target="_blank" rel="noreferrer">
            <span class="sr-only"> Instagram </span>
            <Instagram/>
          </a>
          <a class="hover:opacity-75" href target="_blank" rel="noreferrer">
            <span class="sr-only"> Twitter </span>
           <Twitter/>
          </a>
          <a class="hover:opacity-75" href target="_blank" rel="noreferrer">
            <span class="sr-only"> GitHub </span>
            <GitHub/>
          </a>
          <a class="hover:opacity-75" href target="_blank" rel="noreferrer">
            <span class="sr-only"> LinkedIn </span>
            <LinkedIn/>
          </a>
        </div>
      </div>
      </div>
    <p class="mt-8 text-xs text-gray-800">
     Platform © 2022 Comany Name
    </p>
  </div>
</footer>
</div>
    </>
  )
}

export default RenderCreateAccount
