import React from 'react'
import { Link } from 'react-router-dom'
const ButtonForStudyMaterial = (props) => {
  return (
    <div>
              <div class="inline-flex overflow-hidden bg-white  dark:bg-gray-900 rtl:flex-row-reverse dark: dark:divide-gray-700">
              <Link to={props.Linkofpage} class="px-5 py-2 text-xs  rounded-md  font-medium text-gray-600 hover:text-white-600 transition-colors duration-200 sm:text-sm dark:hover:bg-blue-500 hover:text-white dark:text-blue-500">
                {props.typeofstudyMaterial}
            </Link>

</div>

    </div>
  )
}

export default ButtonForStudyMaterial
