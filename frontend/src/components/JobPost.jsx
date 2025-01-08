import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import the styles

function JobPost() {
    const iduser = localStorage.getItem('iduser');
    const navigate = useNavigate();
    const [job_title, setJob_title] = useState('');
    const [workplace, setWorkplace] = useState('');
    const [job_type, setJob_type] = useState('');
    const [company, setCompany] = useState('');
    const [job_location, setJob_location] = useState('');
    const [contact, setContact] = useState('');
    const [description, setDescription] = useState('');
    const location = useLocation();

    const gotoHome = () => {
        console.log('gotoHome called');
        navigate('/');
    }

    const goToAccount = () => {
        navigate('/Profile');
    };

    const handlePost = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/jobpost', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    job_title,
                    workplace,
                    job_type,
                    company,
                    job_location,
                    contact,
                    description, // Send the HTML content
                    iduser
                }),
            });

            const data = await response.json();

            if (response.ok) {
                navigate("/");
            } else {
                alert(`Error: ${data.message || 'Unknown error occurred'}`);
            }
        } catch (error) {
            console.log('Error:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <>
            {/* Header Container */}
            <div className='flex justify-center items-center bg-white h-[100px]'>
                <h1 className='absolute mr-[1000px] text-blue-800 font-merriweather-sans font-bold text-[30px] hover:cursor-pointer hover:text-blue-600 transition-colors'
                    onClick={gotoHome}>
                    MuYMuY</h1>
                <div className='flex w-[520px]'>
                    <input
                        placeholder="Search the job title or companies"
                        className="w-[450px] h-[35px] shadow-inner border-[3px] border-r-0 rounded-l-[5px] indent-2"
                    ></input>
                    <button
                        type="button"
                        className='place-items-center w-[75px] h-[35px] shadow-inner border-[3px] rounded-r-[5px]'
                    ><img
                            className='w-[24px] h-[24px]'
                            src="images/search-profile.png"
                            alt="Search"
                            onError={() => console.log('Image not found')} />
                    </button>
                    <img
                        src="/images/user-icon.png"
                        alt="Account Icon"
                        className="absolute top-[30px] ml-[700px] w-10 h-10 hover:cursor-pointer"
                        onClick={goToAccount}
                    />
                </div>
            </div>

            {/* Job Post Container */}
            <form onSubmit={handlePost}>
                <div className="bg-[#023E53] h-[1400px] overflow-hidden">
                    <div className="justify-self-center mt-[35px] rounded-[10px] bg-white h-[1200px] w-[950px]">
                        <p className="ml-[30px] pt-[35px] text-[12px] font-semibold">
                            <span className="text-[#ff2020]">*</span>Indicates required
                        </p>
                        <h1 className="justify-self-center mt-[20px] font-bold text-[25px]">Job Details<span className="text-[#ff2020]">*</span></h1>

                        {/* Input Container */}
                        <div className="flex flex-row justify-self-center m-[24px] gap-[30px]">
                            {/* Input-Left */}
                            <div>
                                <p className="text-[15px] text-[#777777] mb-[5px]">Job title</p>
                                <input
                                    id="jobTitle"
                                    className="border-black border-[1px] rounded-[5px] w-[400px] h-[30px] mb-[30px] indent-1"
                                    type="text"
                                    value={job_title}
                                    onChange={(e) => setJob_title(e.target.value)}
                                    required
                                />
                                <p className="text-[15px] text-[#777777] mb-[5px]">Workplace type</p>
                                <input
                                    id="workplace"
                                    className="border-black border-[1px] rounded-[5px] w-[400px] h-[30px] mb-[30px] indent-1"
                                    type="text"
                                    value={workplace}
                                    onChange={(e) => setWorkplace(e.target.value)}
                                    required
                                />
                                <p className="text-[15px] text-[#777777] mb-[5px]">Job Type</p>
                                <input
                                    id="jobType"
                                    className="border-black border-[1px] rounded-[5px] w-[400px] h-[30px] indent-1"
                                    type="text"
                                    value={job_type}
                                    onChange={(e) => setJob_type(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Input-Right */}
                            <div>
                                <p className="text-[15px] text-[#777777] mb-[5px]">Company</p>
                                <input
                                    id="company"
                                    className="border-black border-[1px] rounded-[5px] w-[400px] h-[30px] mb-[30px] indent-1"
                                    type="text"
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                    required
                                />
                                <p className="text-[15px] text-[#777777] mb-[5px]">Job Location</p>
                                <input
                                    id="jobLocation"
                                    className="border-black border-[1px] rounded-[5px] w-[400px] h-[30px] mb-[30px] indent-1"
                                    type="text"
                                    value={job_location}
                                    onChange={(e) => setJob_location(e.target.value)}
                                    required
                                />
                                <p className="text-[15px] text-[#777777] mb-[5px]">Contact</p>
                                <input
                                    id="contact"
                                    className="border-black border-[1px] rounded-[5px] w-[400px] h-[30px] mb-[30px] indent-1"
                                    type="text"
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <div className="justify-self-center flex flex-col mt-[55px]">
                            <h1 className="text-center text-[25px] font-bold mb-[55px]">Description
                                <span className="text-[#ff2020]">*</span>
                            </h1>
                            <ReactQuill
                                className="w-[820px] rounded-[5px] h-[540px] border-black border-[1px] overflow-y-hidden resize-none"
                                id="description"
                                value={description}
                                onChange={setDescription}
                                required
                            />
                        </div>

                        <div className="justify-self-center">
                            <button
                                id="post"
                                type="submit"
                                className="bg-[#D9D9D9] mt-[45px] w-[140px] h-[50px] rounded-[10px] text-[#023E53] font-bold text-[25px] hover:text-white hover:bg-[#023E53]">
                                Post
                            </button>
                        </div>
                    </div>
                </div>
            </form>

        </>
    );
}

export default JobPost;