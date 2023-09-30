import { CurrencyRupee } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
const ComponentGenerate = (props) => {
  return (
    <>
    <div class="w-full bg-white border rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
                <img class="object-center object-cover  h-36 w-36" src={props.imgSrcCourse} alt="photo"/>
            </div>
            <div class="text-center">
                <p class="text-xl text-gray-700 font-bold mb-2">{props.coursename}</p>
                <h3 class="text-base text-gray-400 font-normal">{props.instructor}</h3>
                <h3 class="text-base text-gray-400 font-normal">{props.priceofcourse}<CurrencyRupee/></h3>
               <div className='display-flex justify-center'>

                <button className=' display-flex justify-center  font-bold  w-32 m-2 rounded  bg-blue-700 p-2 text-white hover:bg-orange-500 '><a href={props.viewpagelink}>View Details</a></button>
                <button className='display-flex justify-center w-32 m-2  font-bold  rounded  bg-blue-700 p-2 text-white hover:bg-green-500 '><Link to={props.buyinglink}>{props.stageofcourse}</Link></button>

               </div>
             
            </div>
        </div>
    </>
  )
}

export default ComponentGenerate
