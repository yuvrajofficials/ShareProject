import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from "axios";

const UploadAssignment = () => {

    
    const navigate = useNavigate();
    const [assignmentfile, setAssignment] = useState("");    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
     //create product function
     const handleCreate = async (e) => {
      e.preventDefault();
      try {
          const productData = new FormData();
          productData.append("title", title);
          productData.append("assignmentfile", assignmentfile);
          productData.append("description", description);
          const { data } = axios.post(
              "/api/v1/assignment/assignment-upload",
              productData
          );
          if (data?.success) {
              alert(data?.message);
          } else {
              alert("Assignment Uploaded Successfully");
              navigate("/");
          }
      } catch (error) {
          console.log(error);
          alert("something went wrong");
      }
  };
  return (
    <>
    <div class="flex flex-col h-screen bg-gray-100">

        <div class="bg-white text-white shadow w-full p-2 flex items-center justify-between">
            <div class="flex items-center">
                <div class="flex items-center">
                    <img src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png" alt="Logo" class="w-28 h-18 mr-2" />
                    <h2 class="font-bold text-xl">Teacher Dashboard </h2>
                </div>
                <div class="md:hidden flex items-center">
                    <button id="menuBtn">
                        <i class="fas fa-bars text-gray-500 text-lg"></i>
                    </button>
                </div>
            </div>

            <div class="space-x-5">
                <button>
                    <i class="fas fa-bell text-gray-500 text-lg"></i>
                </button>
                <button>
                    <i class="fas fa-user text-gray-500 text-lg"></i>
                </button>
            </div>
        </div>

        <div class="flex-1 flex flex-wrap">
            <div class="p-2 bg-white w-full md:w-60 flex flex-col md:flex hidden" id="sideNav">
                <nav>
                    <Link  class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" to="/OnlineTeachingPlatform/dashboard/teacher/home">
                        <i class="fas fa-home mr-2"></i>Home
                    </Link>
                    <Link class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" to="/OnlineTeachingPlatform/dashboard/teacher/createcourse">
                        <i class="fas fa-file-alt mr-2"></i>Create Course
                    </Link>
                    <Link class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" to="/OnlineTeachingPlatform/dashboard/teacher/uploadvideo">
                        <i class="fas fa-users mr-2"></i>Upload Video
                    </Link>
                    <Link class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" to="/OnlineTeachingPlatform/dashboard/teacher/uploadmaterial">
                        <i class="fas fa-store mr-2"></i>Upload Study Material
                    </Link>
                    <Link class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" to="/OnlineTeachingPlatform/dashboard/teacher/uploadassignment">
                        <i class="fas fa-exchange-alt mr-2"></i>Upload Assignment
                    </Link>
                </nav>

                <Link class="block text-gray-500 py-2.5 px-4 my-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white mt-auto" to="/OnlineTeachingPlatform/dashboard/teacher/notifications">
                    <i class="fas fa-sign-out-alt mr-2"></i> Notifications
                </Link>

                <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mt-2"></div>

                <p class="mb-1 px-5 py-3 text-left text-xs text-cyan-500">Copyright Platform@2023</p>

            </div>

            <div class="flex-1 p-4 w-full md:w-1/2">
                <div class="relative max-w-md w-full">
                    <div class="absolute top-1 left-2 inline-flex items-center p-2">
                        <i class="fas fa-search text-gray-400"></i>
                    </div>
                    <input class="w-full h-10 pl-10 pr-4 py-1 text-base placeholder-gray-500 border rounded-full focus:shadow-outline" type="search" placeholder="Buscar..." />
                </div>


                <div class="mt-8 bg-white p-4 shadow rounded-lg">
                    <h2 class="text-gray-500 text-lg font-semibold pb-4"> Upload Assignemnt</h2>
                    <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
                 
{/* Component Start from here */}


<div class="flex items-center justify-center p-12">

  <div class="mx-auto w-full max-w-[550px] bg-white">
    <form
      class="py-6 px-9"
      method="POST"
    >
      <div class="mb-5">
        <label
          for="title"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Set Title of Assignment :
        </label>
        <input
          type="text"
          name="title"
          id="title" 
          onChange={(e) => setTitle(e.target.value)}
          placeholder="example"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="mb-5">
        <label
          for="description"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Set Description of Assignment :
        </label>
        <input
          type="text"
          name="description"
          id="description" 
          onChange={(e) => setDescription(e.target.value)}
          placeholder="example is related to .... "
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div class="mb-6 pt-4">
        <label class="mb-5 block text-xl font-semibold text-[#07074D]">
          Upload File
        </label>

        <div class="mb-8">
          <input type="file" name="file" id="file" onChange={(e) => setAssignment(e.target.files[0])}
                                            class="sr-only" />
          <label
            for="file"
            class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
          >
            <div>
              <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                Drop files here
              </span>
              <span class="mb-2 block text-base font-medium text-[#6B7280]">
                Or
              </span>
              <span
                class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]"
              >
                Browse
              </span>
            </div>
          </label>
        </div>
        </div>



      <div>
        <button
          class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
          onClick={handleCreate} >
          Send File
        </button>
      </div>
    </form>
  </div>
</div>

{/* Component end from here */}
                </div>
            </div>
        </div>
        </div>

    </>
  )
}

export default UploadAssignment
