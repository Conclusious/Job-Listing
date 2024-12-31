import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const firstname = localStorage.getItem('firstname');
    const lastname = localStorage.getItem('lastname');
    const [Login, setLogin] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [bios, setBios] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    };

    const goToPost = () => {
        navigate('/JobPost');
    }

    const HandleLogout = () => {
        setLogin(false);
        localStorage.removeItem('Login');
        localStorage.removeItem('userID');
        localStorage.removeItem('firstname');
        localStorage.removeItem('lastname');
        navigate('/');
    };

    return (
        <>
            <div className='bg-[#023E53] h-screen'>
                {/* Header Container */}
                <div className='flex justify-center items-center bg-white h-[100px]'>
                    <h1 className='absolute mr-[1000px] text-blue-800 font-merriweather-sans font-bold text-[30px] hover:cursor-pointer' onClick={goToHome}>MuYMuY</h1>
                    <div className='flex w-[520px]'>
                        <input
                            placeholder="Search the job title or companies"
                            className="w-[450px] h-[35px] shadow-inner border-[3px] border-r-0 rounded-l-[5px] indent-2"
                        ></input>
                        <button
                            type="button"
                            className='place-items-center w-[75px] h-[35px] shadow-inner border-[3px] rounded-r-[5px]'
                        ><img
                                id='search'
                                className='w-[24px] h-[24px]'
                                src="/images/search-profile.png"
                                alt="Search" />
                        </button>
                    </div>
                    <button
                        onClick={goToPost}
                        className='absolute ml-[790px] w-[100px] h-[35px] rounded-[5px] text-[20px] text-white bg-[#023E53] hover:bg-blue-800'>
                        Post Job
                    </button>
                </div>

                {/* Profile Container */}
                <div className='border-t-2 border-t-gray-700'>
                    <div className='justify-self-center mt-[50px] pb-5 bg-white h-auto w-[885px] rounded-[5px] rounded-t-[10px]'>
                        <div className='bg-[#4C4343] h-[175px] rounded-t-[5px]'>
                            <img
                                className='absolute w-[170px] h-[170px] mt-[45px] ml-[30px]'
                                src="/images/user-icon.png"
                                alt="icon" />
                        </div>
                        <div className='flex'>
                            <p
                                id='firstname'
                                className='mt-[57px] ml-[30px] text-[35px] font-bold'> {firstname || 'First Name'}</p>
                            <p
                                id='lastname'
                                className='mt-[57px] ml-[10px] text-[35px] font-bold'> {lastname || 'Last Name'}</p>
                        </div>
                    </div>

                    <div className='flex mt-[50px] justify-center'>
                        <button
                            className='w-[100px] h-[35px] text-red-800 bg-white shadow-inner border-0 rounded-[5px] hover:bg-red-800 hover:text-white'
                            onClick={HandleLogout}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;