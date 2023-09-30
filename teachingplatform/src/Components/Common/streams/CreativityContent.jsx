import React from 'react'
import Maincontent from '../mainpage/MainContent'
import { useAuth } from '../../../context/auth'
const CreativityContent = () => {
  
  const[auth,setAuth] = useAuth();
  return (
    <div>
      
      <h1>Hello</h1>
      <pre>{JSON.stringify(auth,null,4)}</pre>
    </div>
  )
}

export default CreativityContent
