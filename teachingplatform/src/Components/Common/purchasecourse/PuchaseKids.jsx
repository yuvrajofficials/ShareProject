import React from 'react'
import Header from '../heading/Header'
import Footer from '../footer/Footer'
import PurchaseButtonRender from './PurchaseButtonRender'
import ComponentGenerate from './ComponentGenerate'

const PuchaseKids = () => {
  return (
    <>
     <Header/>
    
         <PurchaseButtonRender/>
         <div class="text-center pb-12">
        <h2 class="text-base font-bold text-indigo-600">
            one of the best and children friendly contents
        </h2>
        <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
            Our All Popular and Related Kids Courses
        </h1>
    </div>
<section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
     <ComponentGenerate priceofcourse="1000" viewpagelink="https://www.facebook.com/" stageofcourse="Buy Now" instructor="Dora" coursename="Dora the Explorer" imgSrcCourse="https://images.justwatch.com/poster/154001179/s718/dora-the-explorer.%7Bformat%7D"/>
     <ComponentGenerate priceofcourse="1000" viewpagelink="https://www.facebook.com/" stageofcourse="Buy Now" instructor="Disney" coursename="Micky Mouse Club House" imgSrcCourse="https://m.media-amazon.com/images/M/MV5BMTdiNDIyMGEtNWJjMi00ODlhLWJhM2EtYjJjMjFlMjNhNDEwXkEyXkFqcGdeQXVyODg3NDc1OTE@._V1_.jpg"/>
     <ComponentGenerate priceofcourse="1000" viewpagelink="https://www.facebook.com/" stageofcourse="Buy Now" instructor="Disney" coursename="Chaginton" imgSrcCourse="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ccc3c1b9c480e62c6be7186444e8f17451780d6186fba8008ebcad9bac805d2a._RI_TTW_.jpg"/>
     <ComponentGenerate priceofcourse="1000" viewpagelink="https://www.facebook.com/" stageofcourse="Buy Now" instructor="Sid" coursename="Sid the Science Kid" imgSrcCourse="https://hips.hearstapps.com/hmg-prod/images/educational-tv-shows-for-kides-sid-the-science-kid-1586123902.jpg"/>
   
    </div>
</section>
    
     <Footer/> 
    </>
  )
}

export default PuchaseKids
