import React from 'react'
import Header from '../heading/Header'
import Footer from '../footer/Footer'
import StudyMaterialRender from './StudyMaterialRender' 
import MaterialListGenerater from '../tables/MaterialListGenerator'
import Study from './Study.css'

const StudyCoding = () => {
  return (
    <>
    <Header/>
    <StudyMaterialRender/>
    <h2 > CODING </h2>
    <MaterialListGenerater />
   <Footer/>
    </>
  )
}

export default StudyCoding
