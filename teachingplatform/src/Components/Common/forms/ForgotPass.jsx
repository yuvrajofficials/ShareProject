import React, { useState } from "react";
import Header from '../heading/Header';
import Footer from '../footer/Footer';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPass = () => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [answer, setAnswer] = useState("");

    const navigate = useNavigate();

    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/v1/auth/forgot-password", {
                email,
                newPassword,
                answer,
            });
            if (res && res.data.success) {
                alert(res.data && res.data.message);

                navigate("/OnlineTeachingPlatform/login");
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
            <Header />
            <div class="flex items-center justify-center p-12">

                <div class="mx-auto w-full border rounded-md p-20 border-[#e0e0e0] max-w-[550px]">
                    <form onSubmit={handleSubmit} >
                        <div class="-mx-3 flex flex-wrap">
                            <div class="w-full px-3 sm:w-1/2 formLogin">
                                <div class="mb-5">
                                    <label
                                        for="email"
                                        class="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Email
                                    </label>
                                    <input name="email" type="email" id="useremailname" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter your email" class="block min-w-full text-base  rounded-md border border-gray-300 formLogin focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
                                </div>
                            </div>
                            <div class="w-full px-3 sm:w-1/2 formLogin">
                                <div class="mb-5">
                                    <label
                                        for="cfpassword"
                                        class="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        New Password
                                    </label>

                                    <input type="password" required value={newPassword} onChange={(e) => setNewPassword(e.target.value)} name="newpassword" placeholder="Enter your new password " class="block min-w-full mb-3 rounded-md text-base border border-gray-300 formLogin focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
                                </div>
                            </div>
                            <div class="w-full px-3 sm:w-1/2 formLogin">
                                <div class="mb-5">
                                    <label
                                        for="cfpassword"
                                        class="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Who is you best friend ?
                                    </label>

                                    <input type="text" required value={answer} onChange={(e) => setAnswer(e.target.value)} name="answer" placeholder="Enter your Answer " class="block min-w-full mb-3 rounded-md border border-gray-300 formLogin text-base focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
                                </div>
                            </div>
                        </div>




                        <button type='submit' 
		class="p-2 w-full text-center border-b-8 border-t text-base border-pink-600 rounded-bl-full rounded-br-full
       shadow-md hover:shadow-lg focus:outline-none"> RESET PASSWORD</button>

                    </form>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default ForgotPass
