import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../heading/Header";
import Footer from "../../footer/Footer";
import AdminMenu from "../AdminMenu";
import CategoryForm from "../../Category/CategoryForm";


const CreateCategoryPage = () => {
    const categoryplace = "Enter New Category";
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState(null);
    const [updatedName, setUpdatedName] = useState("");
    const [value, setValue] = useState("");
    //handle Form
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/api/v1/category/create-category", {
                name,
            });
            if (data?.success) {
                alert(`${name} is created`);
                getAllCategory();
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.log(error);
            // alert("somthing went wrong in input form");
        }
    };

    //get all cat
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
        //eslint-disable-next-line
    }, []);

    //update category
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put(
                `/api/v1/category/update-category/${selected._id}`,
                { name: updatedName }
            );
            if (data?.success) {
                alert(`${updatedName} is updated`);
                setSelected("");
                setUpdatedName("");
                setVisible(false);
                getAllCategory();
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
                `/api/v1/category/delete-category/${pId}`
            );
            if (data.success) {
                alert(`category is deleted`);

                getAllCategory();
            } else {
                alert(data.message);
            }
        } catch (error) {
            alert("Somtihing went wrong");
        }
    };
    return (
        <><Header />

            <div className="container-fluid m-3 p-3 dashboard">
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9">
                        <h1>Manage Category</h1>
                        <div className="p-3 w-50">
                            <CategoryForm
                                handleSubmit={handleSubmit}
                                placeholder={categoryplace}
                                value={name}
                                setValue={setName}
                            />
                        </div>
                        <div className="w-75">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories?.map((c) => (
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
            <Footer />
        </>
    );
};

export default CreateCategoryPage;