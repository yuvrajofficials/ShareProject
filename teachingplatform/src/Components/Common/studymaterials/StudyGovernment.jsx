import React from 'react'
import MaterialListGenerater from '../tables/MaterialListGenerator'
import StudyMaterialRender from './StudyMaterialRender'
import Header from '../heading/Header'
import Footer from '../footer/Footer'
import Study from './Study.css'

const StudyGovernment = () => {
  return (
    <>
    <Header/>
    <StudyMaterialRender/>
    <h2>GOVERNMENT EXAMS </h2>
    <MaterialListGenerater />
   <Footer/>
    </>
  )
}

export default StudyGovernment
