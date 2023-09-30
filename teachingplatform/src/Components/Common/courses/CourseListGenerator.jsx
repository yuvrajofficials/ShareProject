import React from 'react'
import MycourseList from '../flashcards/MycourseList'
import {Link}  from 'react-router-dom'


const CourseListGenerator = (props) => {
  return (
   
        <>
        <div>
                <img src={props.courseImageSource}
                  alt="image"
                  class="w-full"
                  />
               <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                     <a
                        href="javascript:void(0)"
                        class="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                        >{props.CourseName}
                     </a>
                  </h3>
                  <p class="text-base text-body-color leading-relaxed mb-7">{props.Discription}
                  </p>
                  <Link to={props.PathForPage}
                     class="
                     inline-block
                     py-2
                     px-7 
                     border border-[#E5E7EB]
                     rounded
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                     >
                  Open
                  </Link>
              
            
            </div>
            
            </div>
            
          
              
            
         
    </>
   
   
  )
}

export default  CourseListGenerator
