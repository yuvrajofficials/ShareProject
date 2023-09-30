import React from 'react'
import Header from '../../heading/Header'
import Footer from '../../footer/Footer'
import AdminMenu from '../AdminMenu'

const UploadStudyMaterial = () => {
  return (
    <>     
    <Header/>
    
    <div className="container-fluid">
          <div className='row'>

            <div className="col-md-3">
              <AdminMenu/>

            </div>
            <div className="col-md-9">
              
          <h1> Hello studymaterial </h1> 
          </div>
            </div>
            </div>
    <Footer/>

    </>
  )
}

export default UploadStudyMaterial
