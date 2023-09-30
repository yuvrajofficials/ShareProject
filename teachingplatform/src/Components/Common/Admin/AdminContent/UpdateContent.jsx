import React, { useState, useEffect } from "react";
import Header from '../../heading/Header'
import Footer from '../../footer/Footer'
import AdminMenu from '../AdminMenu'
import axios from "axios";
import { Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
const { Option } = Select;

const UpdateContent = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [authorofcontent, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [videono, setVideoNo] = useState("");
  const [videolink, setVideoLink] = useState("");
  const [id, setId] = useState("");

  //get single product
  const getSingleContent = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/content/get-content/${params.slug}`
      );
      setTitle(data.content.title);
      setId(data.content._id);
      setDescription(data.content.description);
      setPrice(data.content.price);
      setVideoLink(data.content.videolink);
      setVideoNo(data.content.videono);
      setAuthor(data.content.authorofcontent);
      setCategory(data.content.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleContent();
  }, []);

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
  const handleUpdate = async (e) => {
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

      const { data } = axios.put(
        `/api/v1/content/update-content/${id}`,
        productData
      );
      if (data?.success) {
        alert(data?.message);
      } else {
        alert("Product Updated Successfully");
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      alert("something went wrong");
    }
  };


  //delete a product
  const handleDelete = async () => {
    try {
      let answer = window.prompt("Are You Sure want to delete this product ? ");
      if (!answer) return;
      const { data } = await axios.delete(
        `/api/v1/content/delete-content/${id}`
      );
      alert("Product DEleted Succfully");
      navigate("/dashboard/admin/contents");
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };
  return (
    <>
      <Header />
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Update Product</h1>
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
                value={category}
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
                <button className="btn btn-primary" onClick={handleUpdate}>
                  UPDATE PRODUCT
                </button>
              </div>
              <div className="mb-3">
                <button className="btn btn-danger" onClick={handleDelete}>
                  DELETE PRODUCT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    


        < Footer />

   </>
  )
}

export default UpdateContent
