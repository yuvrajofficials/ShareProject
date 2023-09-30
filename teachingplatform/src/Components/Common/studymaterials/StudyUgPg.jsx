import React from 'react'
import MaterialListGenerater from '../tables/MaterialListGenerator'
import StudyMaterialRender from './StudyMaterialRender'
import Header from '../heading/Header'
import Footer from '../footer/Footer'
import Study from './Study.css'
const StudyUgPg = () => {
  return (
    <div>
        <>
    <Header/>
    <StudyMaterialRender/>
    <h2> UNDER , POST GRADUATE & COMPETITIVE EXAMS</h2>
    <MaterialListGenerater />
   <Footer/>
    </>
    </div>
  )
}

export default StudyUgPg
