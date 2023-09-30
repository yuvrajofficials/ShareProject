import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../heading/Header';
import Footer from '../footer/Footer';
import formCSS from './forms.css';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../context/auth';

const LoginForm = () => {


  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [cfpassword, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/v1/auth/login", {
        email, cfpassword
      }
      );

      if (res.data.success) {
        alert(res.data.message);
        setAuth({

          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
          if(res.data.user.logintype===2){
            navigate("/OnlineTeachingPlatform/dashboard/teacher");
            localStorage.setItem("auth", JSON.stringify(res.data));
       }
         else if(res.data.user.logintype===1){
            navigate("/OnlineTeachingPlatform/dashboard/admin");
            localStorage.setItem("auth", JSON.stringify(res.data));
       }
       else{
        navigate(location.state || "/");
        localStorage.setItem("auth", JSON.stringify(res.data));
       }
       
      } else {
        alert(res.data.message)
      }
   
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>

      <Header />
      <div class="flex items-center justify-center p-12">

        <div class="mx-auto w-full border rounded-md p-20 border-[#e0e0e0] max-w-[550px]">
          <form onSubmit={handleSubmit} >
            <div class="-mx-3 flex flex-wrap">
              <div class="w-full px-3 sm:w-1/2 formLogin">
                <div class="mb-5">
                  <label
                    for="email"
                    class="mb-3 block text-base text-lg font-medium text-[#07074D]"
                  >
                    Email
                  </label>
                  <input name="email" type="email" id="useremailname" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter your email" class="block text-lg min-w-full rounded-md border border-gray-300 formLogin focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2 formLogin">
                <div class="mb-5">
                  <label
                    for="cfpassword"
                    class="mb-3 block text-lg font-medium text-[#07074D]"
                  >
                    Password
                  </label>

                  <input type="password" required value={cfpassword} onChange={(e) => setPassword(e.target.value)} name="cfpassword" placeholder="Enter your password " class="block min-w-full mb-3 text-lg rounded-md border border-gray-300 formLogin focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
                </div>
              </div>
            </div>




            <button type='submit'
              class="p-2 align-item-center border-t border-r text-center border-b-8 border-pink-600 w-1/2 rounded-bl-full
		rounded-br-lg shadow-md hover:shadow-lg focus:outline-none">
              Submit</button>


            <button type='button' onClick={() => { navigate("/OnlineTeachingPlatform/login/forgotpassword") }}
              class="p-2 text-center align-item-center border-l border-b-8 border-teal-600 w-1/2 rounded-br-full
		rounded-bl-lg border-t shadow-md hover:shadow-lg focus:outline-none"> Forgot </button>

          </form>
        </div>
      </div>

      <Toaster />
      <Footer />

    </>
  );
}

export default LoginForm
