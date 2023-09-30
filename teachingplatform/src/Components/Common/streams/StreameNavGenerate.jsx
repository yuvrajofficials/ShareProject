import React from 'react'
import { Link } from 'react-router-dom'

const StreameNavGenerate = (props) => {
  return (
    <>
        <div>
              <div class="inline-flex overflow-hidden bg-white  dark:bg-gray-900 rtl:flex-row-reverse  dark: dark:divide-gray-700">
              <Link to={props.Linkofpage} class="px-5 py-2 text-xs  rounded-md  font-medium text-gray-600 hover:text-green-400 transition-colors duration-200 sm:text-sm  dark:text-blue-500">
               <p className='text-xs   '>
                 {props.typeofstudyMaterial}
                </p>
            </Link>

</div>

    </div>
    </>
  )
}

export default StreameNavGenerate
