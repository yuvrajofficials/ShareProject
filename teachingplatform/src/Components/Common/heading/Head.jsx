import React from 'react'
import Logo from '../../../Images/Logo.png'
import {Link} from 'react-router-dom';
import headerCss from './header.css';
import { useAuth } from '../../../context/auth';
import { NavLink } from 'react-router-dom';
const Head = () => {
    
  const[auth,setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    alert("Logout Successfully");
  };
  return (
    <>
   
<header className=' m-0  border-b-2 '>
        <nav class=" text-[#1a1aff]  px-4  py-2.5 ">
            <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <a href="#" class="flex items-center">
                    <img src="https://th.bing.com/th/id/OIP.RkTe9PnZIwAwO5r2ryLqpwAAAA?pid=ImgDet&rs=1" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                    <span class="self-center text-[#0a0a0a]  font-semibold whitespace-nowrap font-sans font-bold tracking-wide dark:text-[#404040] ">PLATFORM</span>
                </a>
                <div class="flex items-center  lg:order-2">
                {!auth?.user ? (
                <>
                    <Link to="/OnlineTeachingPlatform/login" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign In</Link>
                    <Link to="/OnlineTeachingPlatform/createaccount" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign Up</Link>
                    </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink id="toggleButton" className="nav-link font-bold hover:text-green-700  dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      text="Logout"
                      style={{ border: "none" }}
                    >
                   <h1 className='text-orange-500 '>   {auth?.user?.firstname}  {auth?.user?.lastname}</h1>
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/OnlineTeachingPlatform/dashboard/${
                            auth?.user?.logintype === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item hover:text-white hover:bg-blue-700"
                        >
                          Dashboard  
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/OnlineTeachingPlatform/login"
                          className="dropdown-item hover:text-white hover:bg-blue-700"
                        >
                             Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
                  
                  
                  
                    <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div class=" block justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul class="flex mobilecss2 flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <Link to="/OnlineTeachingPlatform" class="block mobilecss  py-2 pr-4 pl-3 text-[#0a0a0a]  rounded bg-blue-700 lg:bg-transparent active:text-blue-500 lg:p-0 dark:text-[#404040]" aria-current="page"><h5>Home</h5></Link>
                        </li>
                        <li>
                            <Link to="/OnlineTeachingPlatform/studymaterial" class="block mobilecss  py-2 pr-4 pl-3 text-[#0a0a0a]  rounded bg-blue-700 lg:bg-transparent active:text-blue-500 lg:p-0 dark:text-[#404040]" aria-current="page"><h5>Study Material</h5></Link>
                        </li>
                        <li>
                            <Link to="/OnlineTeachingPlatform/purchasecourse" class="block mobilecss  py-2 pr-4 pl-3 text-[#0a0a0a]  rounded bg-blue-700 lg:bg-transparent active:text-blue-500 lg:p-0 dark:text-[#404040]" aria-current="page"><h5>Purchase Courses</h5></Link>
                        </li>
                        <li>
                            <Link to="/OnlineTeachingPlatform/mycourse" class="block mobilecss py-2 pr-4 pl-3 text-[#0a0a0a]  rounded bg-blue-700 lg:bg-transparent active:text-blue-500 lg:p-0 dark:text-[#404040]" aria-current="page"><h5>My Courses</h5></Link>
                        </li>
                        <li>
                            <Link to="/OnlineTeachingPlatform/myprofile" class="block mobilecss  py-2 pr-4 pl-3 text-[#0a0a0a]  rounded bg-blue-700 lg:bg-transparent active:text-blue-500 lg:p-0 dark:text-[#404040]" aria-current="page"><h5>Profile</h5></Link>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav>
            
    </header>
  </>
  )
}

export default Head
