import React from 'react'
import Header from '../heading/Header'
import Footer from '../footer/Footer'
import AdminMenu from './AdminMenu'
import NewHeader from '../heading/NewHeader'
import { useAuth } from '../../../context/auth'

const AdminDashboard = () => {
  const [auth]  = useAuth();
  return (
    <>
      <div>

        <Header/>
        <div className="container-fluid">
          <div className='row'>

            <div className="col-md-3">
              <AdminMenu />

            </div>
            <div className="col-md-9">
              <h2>First Name : {auth?.user?.firstname}</h2>
              <h2>Last Name : {auth?.user?.lastname}</h2>
              <h2>Email : {auth?.user?.email}</h2>
              <h2>Phone : {auth?.user?.phone}</h2>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default AdminDashboard
