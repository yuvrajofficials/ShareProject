import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Spinner = ({ path = "OnlineTeachingPlatform/login" }) => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location, path]);

  return (
    <>
    <div className="bg-gray-100 ">

  <h2 className="box-decoration-clone  animate-pulse" > Redirecting in   {count}</h2>
  
<div class="flex items-center justify-center min-h-screen p-5 min-w-screen">

<div class="block flex space-x-2 animate-pulse ">
    
    <div class="block w-10 h-10 bg-yellow-500 rounded-full animate-bounce"></div>
    <div class="w-10 h-10 bg-orange-500 rounded-full animate-bounce"></div>
    <div class="w-10 h-10 bg-red-500 rounded-full animate-bounce"></div>
    <div class="w-10 h-10 bg-green-500 rounded-full animate-bounce"></div>
    <div class="w-10 h-10 bg-blue-500 rounded-full animate-bounce"></div>
</div>
</div>
</div>

    </>
  )
}

export default Spinner
