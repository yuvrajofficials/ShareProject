import React from 'react'
import MaterialListGenerater from '../tables/MaterialListGenerator'
import StudyMaterialRender from './StudyMaterialRender'
import Header from '../heading/Header'
import Footer from '../footer/Footer'
import Study from './Study.css'
const StudyKidsContent = () => {
  return (
    <div>
          <>
    <Header/>
    <StudyMaterialRender/>
    <h2> KIDS CONTENT </h2>
    <MaterialListGenerater message="Hello" />
   <Footer/>
    </>
    </div>
  )
}

export default StudyKidsContent
