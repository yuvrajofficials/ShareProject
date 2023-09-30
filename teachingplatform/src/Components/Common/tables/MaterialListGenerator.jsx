import { Star, StarBorderPurple500 } from '@mui/icons-material'
import React from 'react'
import MaterialRowComponents from './MaterialRowComponents'


const MaterialListGenerater = (props) => {
  return (
    <div>
     
<div class="overflow-x-auto">
        <div class="min-w-screen flex items-center justify-center  font-sans overflow-hidden">
            <div class="w-full lg:w-5/6">
                <div class="bg-white shadow-md rounded my-6">
                    <table class="min-w-max w-full table-auto">
                        <thead>
                            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th class="py-3 px-6 text-left">Course Name</th>
                                <th class="py-3 px-6 text-left">Instructor</th>
                                <th class="py-3 px-6 text-center">Price</th>
                                <th class="py-3 px-6 text-center">Ratings</th>
                                <th class="py-3 px-6 text-center">Details</th>
                                <th class="py-3 px-6 text-center">Action</th>
                                
                            </tr>
                        </thead>
                        <tbody class="text-gray-600 text-sm font-light">
                         <MaterialRowComponents />
                         <MaterialRowComponents/>
                         <MaterialRowComponents/>
                         <MaterialRowComponents/>
                         <MaterialRowComponents/>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default MaterialListGenerater
