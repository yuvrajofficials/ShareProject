import React from 'react'
import MaterialListGenerater from '../tables/MaterialListGenerator'
import StudyMaterialRender from './StudyMaterialRender'
import Header from '../heading/Header'
import Footer from '../footer/Footer'

const PrimaryMaterial = () => {
  return (
    <>
    <Header/>
    <h2 > Our Popular Study Material </h2>
    <StudyMaterialRender/>
   
   <Footer/>
    </>
  )
}

export default PrimaryMaterial
