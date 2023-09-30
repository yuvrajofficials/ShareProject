import React from 'react'
import Header from '../Common/heading/Header'
import Footer from '../Common/footer/Footer'
import ButtonForStudyMaterial from '../Common/buttons/ButtonForStudyMaterial'
import StudyMaterialRender from '../Common/studymaterials/StudyMaterialRender'
import MaterialListGenerater from '../Common/tables/MaterialListGenerator'


const StudyMaterial= () => {
  return (
    <>
    <Header/>
  {/*  To create button list */}
    <StudyMaterialRender/>
    <h2 > Our Popular Study Material </h2>
    <MaterialListGenerater/>

       


      <Footer/>
        </>
  )
}

export default StudyMaterial

