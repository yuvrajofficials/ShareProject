import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../heading/Header';
import Footer from '../footer/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material'

const CreateAccount = () => {


  const navigate = useNavigate();
  const [username, setUserName] = useState("")
  const [firstname, setFirstName] = useState("")
  const [middlename, setMiddleName] = useState("")
  const [lastname, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhoneNo] = useState("")
  const [crpassword, setCreatePassword] = useState("")
  const [cfpassword, setConfirmPassword] = useState("")
  const [answer, setAnswer] = useState("")
  const [profilephoto, setProfilePhoto] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log( firstname,lastname,middlename,email,cfpassword,crpassword,phone,answer,profilephoto,username,answer );
      const res = await axios.post("/api/v1/auth/register", {
        firstname,lastname,middlename,email,cfpassword,crpassword,phone,answer,profilephoto,username,answer
      });
      if (res.data.success) {
        alert(res.data.message);
        navigate("/");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };
 
  return (
  
        <>

       
        <div class="flex items-center justify-center p-12">
  
          <div class="mx-auto w-full border rounded-md p-10 border-[#e0e0e0] max-w-[550px]">
            <form onSubmit={handleSubmit} >
              <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for="firstname"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      First Name
                    </label>
                    <input name="firstname" type="text" id="useremailname" value={firstname} onChange={(e) => setFirstName(e.target.value)} required placeholder="First Name" class="block text-base min-w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
                  </div>
                </div>
                <div class="w-full px-3 sm:w-1/2 ">
                  <div class="mb-5">
                    <label
                      for="middlename"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Middle Name
                    </label>
  
                    <input type="text"name="middlename" required value={middlename} onChange={(e) => setMiddleName(e.target.value)}  placeholder="Middle Name " class="block min-w-full mb-3  text-base rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
                  </div>
                </div>
              </div>
  
              <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for="lastname"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Last Name
                    </label>
                    <input name="lastname" type="text" id="useremailname" value={lastname} onChange={(e) => setLastName(e.target.value)} required placeholder="Last Name" class="block min-w-full  text-base rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
                  </div>
                </div>
                <div class="w-full px-3 sm:w-1/2 ">
                  <div class="mb-5">
                    <label
                      for="username"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                     Custom User Name
                    </label>
  
                    <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} name="username" placeholder="Custom User Name " class="block min-w-full mb-3 rounded-md border text-base  border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
                  </div>
                </div>
              </div>
  
              <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for="email"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Email
                    </label>
                    <input name="email" type="email" id="useremailname" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter your email" class="block min-w-full text-base  rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
                  </div>
                </div>
                <div class="w-full px-3 sm:w-1/2 ">
                  <div class="mb-5">
                    <label
                      for="phone"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Phone No
                    </label>
  
                    <input type="number" required value={phone} onChange={(e) => setPhoneNo(e.target.value)} name="phone" placeholder=" Phone No " class="block min-w-full mb-3 rounded-md border text-base  border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
                  </div>
                </div>
              </div>
  
              <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for="crpassword"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Create Password
                    </label>
                    <input name="crpassword" type="password" id="useremailname" value={crpassword} onChange={(e) => setCreatePassword(e.target.value)} required placeholder="Create Password" class="block min-w-full text-base  rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
                  </div>
                </div>
                <div class="w-full px-3 sm:w-1/2 ">
                  <div class="mb-5">
                    <label
                      for="cfpassword"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Confirm Password
                    </label>
  
                    <input type="password" required value={cfpassword} onChange={(e) => setConfirmPassword(e.target.value)} name="cfpassword" placeholder="Confirm password " class="block min-w-full mb-3 rounded-md text-base  border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
                  </div>
                </div>
              </div>

              <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-full">
                  <div class="mb-5">
                    <label
                      for="answer"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Security Question
                    </label>
                    <label
                      for="answer"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Who is Your favourite friend ?
                    </label>
                    <input name="answer" type="text" id="useremailname" value={answer} onChange={(e) => setAnswer(e.target.value)} required placeholder="Give your answer " class="block min-w-full rounded-md  text-base border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
                  </div>
                </div>
              </div>

              <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-full">
                  <div class="mb-5">
                    <label
                      for="answer"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    > Profile Photo
                  </label>
                    <input  type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setProfilePhoto(e.target.files[0])} required class="block min-w-full rounded-md  text-base border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
                  </div>
                </div>
              </div>
  
         
  
              <button type='submit' onClick={handleSubmit}
		class="p-2 w-full text-center border-b-8 border-t text-base border-pink-600 rounded-bl-full rounded-br-full
       shadow-md hover:shadow-lg focus:outline-none">Submit</button>
            </form>
          </div>
        </div>
        
  

  
      </>
  )
}

export default CreateAccount
