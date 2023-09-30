import React from 'react'
import MaterialListGenerater from '../tables/MaterialListGenerator'
import StudyMaterialRender from './StudyMaterialRender'
import Header from '../heading/Header'
import Footer from '../footer/Footer'
import Study from './Study.css'
const StudyPrimary = () => {
  return (
    <div>
          <>
    <Header/>
    <StudyMaterialRender/>
    <h2>CLASS I to X & COMPETITIVE EXAMS</h2>
    <MaterialListGenerater />
   <Footer/>
    </>
    </div>
  )
}

export default StudyPrimary
