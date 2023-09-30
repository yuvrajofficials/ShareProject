import React, { useState, useEffect } from "react";
import Header from '../../../heading/Header';
import AdminMenu from "../../AdminMenu";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../../../footer/Footer";
import thumbnailcss from "../Admincss.css";
const Content = () => {
  const [contents, setContent] = useState([]);

  const results = [];

  //getall products
  const getAllContent = async (req, res) => {
    try {
      const { data } = await axios.get("/api/v1/content/get-content");
      setContent(data.contents);
    } catch (error) {
      console.log(error);
      alert("Something Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllContent();
  }, []);

  return (
    <>
      <Header />

      <div className="row dashboard">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9 ">
          {contents?.map((p) => (
            <div class=" bg-white flex flex-row flex-wrap p-3">
              <div class="mx-auto w-2/3">

                <div class="rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased thumbnailcourse" >
                  <div class="md:w-1/3 w-full">
                    <img src={`/api/v1/content/content-thumbnail/${p._id}`} class="rounded-lg shadow-lg w-12 h-12 antialiased" alt={p.title} />
                  </div>
                  <div class="md:w-2/3 w-full px-3 flex flex-row flex-wrap">
                    <div class="w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0">
                      <div class="text-2xl text-white leading-tight">{p.authorofcontent}</div>
                      <div class="text-normal text-gray-600 hover:text-gray-400 cursor-pointer"><span class="border-b border-dashed border-gray-500 pb-1">{p.title}</span></div>
                      <div >Uploaded On : <b>{p.timestamps}</b></div>
                      <div><p>{p.description}</p></div>
                      <div><p>{p.description}</p></div>
                      <div><p>{p.description}</p></div>
                      <Link
                key={p._id}
                to={`/OnlineTeachingPlatform/dashboard/admin/content/update/${p.slug}`}
                class="text-sm text-gray-300 produc`t-link hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0"
              ><button className="btn btn-primary">Update Content</button></Link>
                  </div>
                    </div>
                      <div><p>{p.description}</p></div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div >


      <Footer />
    </>
  )
}

export default Content