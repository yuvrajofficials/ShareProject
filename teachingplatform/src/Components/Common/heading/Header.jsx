import React from 'react'
import Head from './Head'
import headerCss from './header.css'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import toast, { Toaster } from 'react-hot-toast';
import NewHeader from './NewHeader'
import HeaderAdmin from './HeaderAdmin'
import HeaderUser from './HeaderUser'

const Header = (props) => {
  return (
    <>
    <Helmet>
  <meta charset="UTF-8"/>
  <meta name="description" content="Free Web tutorials"/>
  <meta name="keywords" content="HTML, CSS, JavaScript"/>
  <meta name="author" content="John Doe"/>
  <title>Student Learning Platform</title>
  </Helmet>
    <div className='HeaderImg '>
      <Head />
      </div>
      
    </>
  )
}

export default Header
