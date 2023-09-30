import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from "axios";
import { Select } from "antd";
const { Option } = Select;

const UploadVideo = () => {

    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [authorofcontent, setAuthor] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [videono, setVideoNo] = useState("");
    const [videolink, setVideoLink] = useState("");

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

    //create product function
    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            const productData = new FormData();
            productData.append("title", title);
            productData.append("price", price);
            productData.append("thumbnail", thumbnail);
            productData.append("category", category);
            productData.append("authorofcontent", authorofcontent);
            productData.append("description", description);
            productData.append("videono", videono);
            productData.append("videolink", videolink);
            const { data } = axios.post(
                "/api/v1/content/create-content",
                productData
            );
            if (data?.success) {
                alert(data?.message);
            } else {
                alert("Product Created Successfully");
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
                            <h2 class="text-gray-500 text-lg font-semibold pb-4">Autorizaciones Pendientes</h2>
                            <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>

                            {/* Actual content start from here */}


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


                                <div className="mb-3">
                                    <label className="btn btn-outline-secondary col-md-12">
                                        {thumbnail ? thumbnail.title : "Upload Photo"}
                                        <input
                                            type="file"
                                            name="photo"
                                            accept="image/*"
                                            onChange={(e) => setThumbnail(e.target.files[0])}
                                            hidden
                                        />
                                    </label>
                                </div>

                                <div className="mb-3">
                                    {thumbnail && (
                                        <div className="text-center">
                                            <img
                                                src={URL.createObjectURL(thumbnail)}
                                                alt="content_photo"
                                                height={"200px"}
                                                className="img img-responsive"
                                            />
                                        </div>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="text"
                                        value={title}
                                        placeholder="write a title of video"
                                        className="form-control"
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <textarea
                                        type="text"
                                        value={description}
                                        placeholder="write a description"
                                        className="form-control"
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="number"
                                        value={price}
                                        placeholder="write a Price"
                                        className="form-control"
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="text"
                                        value={authorofcontent}
                                        placeholder="write teacher name "
                                        className="form-control"
                                        onChange={(e) => setAuthor(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        value={videolink}
                                        placeholder="Provide link of content"
                                        className="form-control"
                                        onChange={(e) => setVideoLink(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="number"
                                        value={videono}
                                        placeholder="Provide video no on playlist"
                                        className="form-control"
                                        onChange={(e) => setVideoNo(e.target.value)}
                                    />
                                </div>




                                <div className="mb-3">
                                    <button className="btn btn-primary" onClick={handleCreate}>
                                        CREATE PRODUCT
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default UploadVideo
