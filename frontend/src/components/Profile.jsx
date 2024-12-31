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

    const toggleEditModal = () => {
        setShowEdit(!showEdit);
    }

    return (
        <>
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
            <div className='bg-[#023E53] h-[1000px] border-t-2 border-t-gray-700'>
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

                        <button
                            type='button'
                            className='absolute mt-[25px] ml-[800px]'
                            onClick={toggleEditModal}
                        >
                            <img
                                className='w-[22px] h-[22px]'
                                src="/images/pencil.png"
                                alt="Edit" />
                        </button>
                    </div>
                    <p
                        id='bios'
                        className='mt-[20px] ml-[30px] text-[20px]'>
                        {bios}
                    </p>
                    <div className='flex ml-[30px] mt-[8px]'>
                        <address
                            id='city'
                            className='text-[#ADA3A3] text-[14px]'>
                            {city}<span>,</span>
                        </address>
                        <p className='mr-1 text-[#ADA3A3] text-[14px]'>
                            {country}
                        </p>
                        <address
                            id='country'
                            className='text-[#ADA3A3] text-[14px]'></address>
                    </div>
                </div>

                {/* Education Container */}
                <div className='justify-self-center mt-[20px] pb-5 rounded-[5px] bg-white w-[885px] h-auto'>
                    <div className='flex'>
                        <h1 className='ml-[30px] pt-[20px] text-[25px] font-merriweather-sans font-bold'>Education</h1>
                        <button
                            type='button'
                            className='absolute mt-[25px] ml-[750px]'>
                            <img
                                id='add-edu'
                                className='w-[22px] h-[22px]'
                                src="/images/addition.png"
                                alt="Add" />
                        </button>
                        <button
                            type='button'
                            className='absolute mt-[25px] ml-[800px]'>
                            <img
                                id='add-edu'
                                className='w-[22px] h-[22px]'
                                src="/images/pencil.png"
                                alt="Edit" />
                        </button>
                    </div>
                    <p
                        id='school'
                        className='ml-[30px] mt-[15px] font-semibold'>Royal University of Phnom Penh</p>
                </div>

                {/* Skill Container */}
                <div className='justify-self-center mt-[20px] pb-5 rounded-[5px] bg-white w-[885px] h-auto'>
                    <div className='flex'>
                        <h1 className='ml-[30px] pt-[20px] text-[25px] font-merriweather-sans font-bold'>Skills</h1>
                        <button
                            type='button'
                            className='absolute mt-[25px] ml-[750px]'>
                            <img
                                id='add-skills'
                                className='w-[22px] h-[22px]'
                                src="/images/addition.png"
                                alt="Add" />
                        </button>
                        <button
                            type='button'
                            className='absolute mt-[25px] ml-[800px]'>
                            <img
                                id='edit-skills'
                                className='w-[22px] h-[22px]'
                                src="/images/pencil.png"
                                alt="Edit" />
                        </button>
                    </div>
                    <p
                        id='skills'
                        className='ml-[30px] mt-[15px] font-semibold'>Engineering</p>
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

            {/* Edit Container */}
            {showEdit && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50'>
                    <div className='bg-white w-[1100px] h-[600px] rounded-[10px] p-5'>
                        <div className='flex items-center justify-between mb-[25px]'>
                            <h1 className='ml-[50px] text-[40px] font-merriweather-sans font-semibold'>Edit Profile</h1>
                            <button
                                className='mr-[40px] w-[40px] h-[50px]'
                                onClick={toggleEditModal}
                            >
                                <img
                                    src="images/cross.png"
                                    alt="go-back"
                                /></button>
                        </div>

                        <div className='border-t-2 mb-[25px]'></div>

                        <div className='h-[calc(100%-120px)] overflow-y-auto'>
                            <form onSubmit={handleBioSubmit}>
                                {/* Bios */}
                                <label className='ml-[50px] text-[25px]'>Bios
                                </label>
                                <textarea
                                    id='bios'
                                    type="text"
                                    placeholder='Write something...'
                                    className='flex justify-self-center mt-[20px] w-[950px] h-[200px] text-[20px] indent-[15px] border-black border-[1.5px] rounded-[5px] overflow-y-auto'
                                    value={bios}
                                    onChange={(e) => setBios(e.target.value)}
                                />

                                {/* Location */}
                                <h1 className='ml-[50px] mt-[50px] mb-[20px] text-[35px] font-merriweather-sans font-semibold'>Location</h1>
                                <label className='ml-[50px] text-[25px]'>City
                                </label>
                                <input
                                    id='city'
                                    type="text"
                                    placeholder='e.g. Phnom Penh'
                                    className='flex justify-self-center  mt-[20px] mb-[20px] w-[950px] h-[50px] text-[20px] indent-[15px] border-black border-[1.5px] rounded-[5px]'
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />

                                <label className='ml-[50px] text-[25px]'>Country
                                </label>
                                <input
                                    id='country'
                                    type="text"
                                    placeholder='e.g. Cambodia'
                                    className='flex justify-self-center mt-[20px] mb-[20px] w-[950px] h-[50px] text-[20px] indent-[15px] border-black border-[1.5px] rounded-[5px]'
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                />

                                <button
                                    type='submit'
                                    className='flex justify-self-center place-content-center place-items-center mt-[30px] w-[100px] h-[50px] rounded-[5px] text-blue-600 shadow-inner border-[1.5px] hover:bg-blue-600 hover:text-white'
                                >Confirm
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Profile;