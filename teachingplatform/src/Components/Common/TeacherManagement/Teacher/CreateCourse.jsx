import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import TeacherCategoryForm from "./TeacherCategoryForm";
import { useAuth } from "../../../../context/auth";
import { Select } from "antd";

const { Option } = Select;



const CreateCourse = () => {

      
  const[auth,setAuth] = useAuth();
  const [coursecategory, setCategory] = useState("");    
  const creatoremail = auth?.user?.email ;
    const [categories, setCategories] = useState([]);
    const passplace = "Create New Course";
    const [courses, setCourses] = useState([]);
    const [name, setName] = useState("");
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState(null);
    const [updatedName, setUpdatedName] = useState("");
    const [value, setValue] = useState("");
    //handle Form
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/api/v1/course/create-course", {
                name,coursecategory,creatoremail
            });
            if (data?.success) {
                alert(`${name} is created`);
                getAllCourses();
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.log(error);
            // alert("somthing went wrong in input form");
        }
    };

    //get all category
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get("/api/v1/category/get-category");
            if (data?.success) {
                setCategories(data?.category);
            }
        } catch (error) {
            console.log(error);
            alert("Something wwent wrong in getting catgeory");
        }
    };

    useEffect(() => {
        getAllCategory();
    }, []);



    //get all cat
    const getAllCourses = async () => {
        try {
            const { data } = await axios.get("/api/v1/course/get-course");
            if (data?.success) {
                setCourses(data?.course);
            }
        } catch (error) {
            console.log(error);
            alert("Something went wrong in getting courses");
        }
    };

    useEffect(() => {
        getAllCourses();
        //eslint-disable-next-line
    }, []);

    //update category
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put(
                `/api/v1/course/update-course/${selected._id}`,
                { name: updatedName }
            );
            if (data?.success) {
                alert(`${updatedName} is updated`);
                setSelected("");
                setUpdatedName("");
                setVisible(false);
                getAllCourses();
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.log(error);
        }
    };
    //delete category
    const handleDelete = async (pId) => {
        try {
            const { data } = await axios.delete(
                `/api/v1/course/delete-course/${pId}`
            );
            if (data.success) {
                alert(`course is deleted`);

                getAllCourses();
            } else {
                alert(data.message);
            }
        } catch (error) {
            alert("Somtihing went wrong");
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
                            <Link class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" to="/OnlineTeachingPlatform/dashboard/teacher/home">
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
                            <h2 class="text-gray-500 text-lg font-semibold pb-4">Create Course</h2>
                            <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
                            {/*  Actual content start from here */}



                            <div className="m-1 w-75">
              <Select
                bordered={false}
                placeholder="Select a category"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                  setCategory(value);
                }}
              >
                {categories?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
              
               </div>




                            <TeacherCategoryForm
                                handleSubmit={handleSubmit}
                                value={name}
                                setValue={setName}
                                placeholder={passplace}
                            />

                            <div className="w-75">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {courses?.map((c) => (
                                            <>
                                                <tr>
                                                    <td key={c._id}>{c.name}</td>
                                                    <td>
                                                        <button
                                                            className="btn btn-primary ms-2"
                                                            data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                                            onClick={() => {
                                                                setUpdatedName(c.name);
                                                                setSelected(c);
                                                            }}
                                                        >
                                                            Edit
                                                        </button>
                                                        <button
                                                            className="btn btn-danger ms-2"
                                                            onClick={() => {
                                                                handleDelete(c._id);
                                                            }}
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            </>
                                        ))}
                                    </tbody>
                                </table>
                                <div class="modal-dialog modal-dialog-centered"
                                >


                                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="staticBackdropLabel"> Modify Category</h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">

                                                    <form onSubmit={handleSubmit}>
                                                        <div className="mb-3">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder=""
                                                                value={updatedName}
                                                                onChange={(e) => setUpdatedName(e.target.value)}
                                                            />
                                                        </div>
                                                        <button type="button" class="btn m-2 btn-outline-danger" data-bs-dismiss="modal">Close</button>
                                                        <button type="submit" onClick={handleUpdate} class="btn m-2 text-blue-500 btn-primary"> Submit</button>
                                                    </form>


                                                </div>
                                                {/* <div class="modal-footer">
                                            </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>




            </div>

      

    </>
  )
}

export default CreateCourse
