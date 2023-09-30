import React from 'react'
import Header from '../heading/Header'
import Footer from '../footer/Footer'
import PurchaseButtonRender from './PurchaseButtonRender'
import ComponentGenerate from './ComponentGenerate'

const PurchasePrimary = () => {
  return (
    <>
     <Header/>
    
         <PurchaseButtonRender/>
         <div class="text-center pb-12">
        <h2 class="text-base font-bold text-indigo-600">
            We have the best courses according to your need
        </h2>
        <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
            Our Trending and Popular Courses
        </h1>
    </div>
<section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
     <ComponentGenerate priceofcourse="1000" viewpagelink="https://www.facebook.com/" stageofcourse="Buy Now" instructor="Yash" coursename="Web Development" imgSrcCourse="https://ventsabout.com/wp-content/uploads/2020/09/1c5bb2ce8ba9dc172d24646eff0ad495.jpg"/>
     <ComponentGenerate priceofcourse="1000" viewpagelink="https://www.facebook.com/" stageofcourse="Buy Now" instructor="Yash" coursename="Web Development" imgSrcCourse="https://ventsabout.com/wp-content/uploads/2020/09/1c5bb2ce8ba9dc172d24646eff0ad495.jpg"/>
     <ComponentGenerate priceofcourse="1000" viewpagelink="https://www.facebook.com/" stageofcourse="Buy Now" instructor="Yash" coursename="Web Development" imgSrcCourse="https://ventsabout.com/wp-content/uploads/2020/09/1c5bb2ce8ba9dc172d24646eff0ad495.jpg"/>
     <ComponentGenerate priceofcourse="1000" viewpagelink="https://www.facebook.com/" stageofcourse="Buy Now" instructor="Yash" coursename="Web Development" imgSrcCourse="https://ventsabout.com/wp-content/uploads/2020/09/1c5bb2ce8ba9dc172d24646eff0ad495.jpg"/>
   
    </div>
</section>
    
     <Footer/> 
    </>
  )
}

export default PurchasePrimary
