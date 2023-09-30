import React from 'react'
import { Link } from 'react-router-dom'
import CourseListGenerator from '../courses/CourseListGenerator'
import ComponentGenerate from '../purchasecourse/ComponentGenerate'

const MycourseList = () => {
   return (
      <>

         <link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />

         <section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
            <div class="container">
               <div class="flex flex-wrap -mx-4">
                  <div class="w-full md:w-1/2 xl:w-1/3 px-4">
                     <div class="bg-white rounded-lg overflow-hidden mb-10">
                  <ComponentGenerate priceofcourse="1000" buyinglink='/OnlineTeachingPlatform/mycourse/webdev' viewpagelink="https://notepad.pw/course1-platform" stageofcourse="Open " instructor="Yash" coursename="Web Development" imgSrcCourse="https://ventsabout.com/wp-content/uploads/2020/09/1c5bb2ce8ba9dc172d24646eff0ad495.jpg"/>
                     </div>
                  </div>
                  <div class="w-full md:w-1/2 xl:w-1/3 px-4">
                     <div class="bg-white rounded-lg overflow-hidden mb-10">
     <ComponentGenerate priceofcourse="1000" viewpagelink="https://notepad.pw/course2-platform"  stageofcourse="Open " instructor="Ave" coursename="Python Development" imgSrcCourse="https://w0.peakpx.com/wallpaper/209/515/HD-wallpaper-python-logo-coding-kod-kodlama-code-mobile-lock-programming.jpg"/>
                     </div>
                  </div>
                  <div class="w-full md:w-1/2 xl:w-1/3 px-4">
                     <div class="bg-white rounded-lg overflow-hidden mb-10">
                  <ComponentGenerate priceofcourse="1000" viewpagelink="https://notepad.pw/course3-platform"  stageofcourse="Open " instructor="Steve" coursename="App Development" imgSrcCourse="https://api.reliasoftware.com/uploads/the_complete_guide_to_mobile_app_development_2021_ded2abd1b1.png"/>
               
                    </div>
                  </div>
   

                
               </div>
            </div>
         </section>

      </>
   )
}

export default MycourseList
