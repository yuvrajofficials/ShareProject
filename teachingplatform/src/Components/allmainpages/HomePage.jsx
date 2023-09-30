import React from 'react'
import Header from '../Common/heading/Header'
import Footer from '../Common/footer/Footer'
import ButtonContent from '../Common/buttons/ButtonContent'
import ReviewsHome from '../Common/noncateragy/ReviewsHome'
import Statistics from '../Common/noncateragy/Statistics'
import InfoWebPlat from '../Common/noncateragy/InfoWebPlat'

const HomePage = () => {
  return (<>
    
        <Header/>
        <ButtonContent/>
        <ReviewsHome/>
        <Statistics/>
        <InfoWebPlat/>

         <Footer/>
    </>
  )
}

export default HomePage
