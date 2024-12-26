import React from "react";
import { useNavigate } from "react-router-dom";

function JobPost() {
    const navigate = useNavigate();

    const gotoHome = () => {
        navigate('/');
    }

    return (
        <>
            {/* Header Container */}
            <div className='flex justify-center items-center bg-white h-[100px]'>
                <h1 className='absolute mr-[1000px] text-blue-800 font-merriweather-sans font-bold text-[30px] hover:cursor-pointer'
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
                            id=""
                            className='w-[24px] h-[24px]'
                            src="../../public/images/search-profile.png"
                            alt="Search" />
                    </button>
                </div>
            </div>

            {/* Job Post Container */}
            <div className="bg-[#023E53] h-[1400px] overflow-hidden">
                <div className="justify-self-center mt-[35px] rounded-[10px] bg-white h-[1150px] w-[950px]">
                    <p className="ml-[30px] pt-[35px] text-[12px] font-semibold">
                        <span className="text-[#ff2020]">*</span>Indicates required
                    </p>
                    <h1 className="justify-self-center mt-[20px] font-bold text-[25px]">Job Details<span className="text-[#ff2020]">*</span></h1>

                    {/* Input Container */}
                    <div className="flex flex-row justify-self-center m-[24px] gap-[30px]">
                        {/* Input-Left */}
                        <div>
                            <p className="text-[15px] text-[#777777] mb-[5px]">Job title</p>
                            <input id="jobTitle" className="border-black border-[1px] rounded-[5px] w-[400px] h-[30px] mb-[30px]" type="text" />
                            <p className="text-[15px] text-[#777777] mb-[5px]">Workplace type</p>
                            <input id="workplace" className="border-black border-[1px] rounded-[5px] w-[400px] h-[30px] mb-[30px]" type="text" />
                            <p className="text-[15px] text-[#777777] mb-[5px]">Job Type</p>
                            <input id="jobType" className="border-black border-[1px] rounded-[5px] w-[400px] h-[30px]" type="text" />
                        </div>

                        {/* Input-Right */}
                        <div>
                            <p className="text-[15px] text-[#777777] mb-[5px]">Workplace type</p>
                            <input id="workplace" className="border-black border-[1px] rounded-[5px] w-[400px] h-[30px] mb-[30px]" type="text" />
                            <p className="text-[15px] text-[#777777] mb-[5px]">Job Location</p>
                            <input id="jobLocation" className="border-black border-[1px] rounded-[5px] w-[400px] h-[30px] mb-[30px]" type="text" />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="justify-self-center flex flex-col mt-[55px]">
                        <h1 className="text-center text-[25px] font-bold mb-[55px]">Description <span className="text-[#ff2020]">*</span></h1>
                        <textarea className="w-[820px] rounded-[5px] h-[500px] border-black border-[1px]" id="description"></textarea>
                    </div>

                    <div className="justify-self-center">
                        <button id="post"
                                type="submit"
                                className="bg-[#D9D9D9] mt-[45px] w-[140px] h-[50px] rounded-[10px] text-[#023E53] font-bold text-[25px] hover:text-white hover:bg-[#023E53]">
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default JobPost;