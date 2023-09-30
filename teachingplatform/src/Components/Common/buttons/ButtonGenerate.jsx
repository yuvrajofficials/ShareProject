import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import ButtonCss from './buttonCss.css'

const ButtonGenerate = (props) => {
  return (
    <>
    <div  className='ButtonGeneratecss'>
      <div className="grid-container">
      

      <Link to={props.pathto} class="bg-blue-50 border hover:bg-blue-500 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2   focus:outline-none display-flex justify-center dark:focus:ring-blue-800 h-24 w-40 ButtonImg ">{props.seticons}<p> </p>{props.buttonText}   </Link>
   
    </div>
      </div>
   </>
  )
}

export default ButtonGenerate
