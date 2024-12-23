import React from 'react';

function Profile() {
    return (
        <>
            {/* Header Container */}
            <div className='flex justify-center items-center bg-[#023E53] h-[100px]'>
                <h1 className='absolute mr-[1000px] font-merriweather-sans font-bold text-[30px] text-white'>MUYMUY</h1>
                <div className='flex w-[520px]'>
                    <input
                        placeholder="Search the job title or companies"
                        className="w-[450px] h-[35px] rounded-l-[5px] indent-2"
                    ></input>
                    <button
                        type="button"
                        className='place-items-center bg-gray-100 w-[75px] h-[35px] rounded-r-[5px]'
                    ><img
                            className='w-[24px] h-[24px]'
                            src="../../public/images/search-profile.png"
                            alt="Search" />
                    </button>
                </div>
            </div>

            {/* Profile Container */}
            <div className='bg-[#023E53] h-[1000px] border-t-2 border-t-gray-500'>
                <div className='justify-self-center mt-[50px] pb-5 bg-white h-auto w-[885px] rounded-[5px] rounded-t-[10px]'>
                    <div className='bg-[#4C4343] h-[175px] rounded-t-[5px]'>
                        <img
                            className='absolute w-[170px] h-[170px] mt-[45px] ml-[30px]'
                            src="../../public/images/user-icon.png"
                            alt="icon" />
                    </div>
                    <div className='flex'>
                        <p
                            id='firstname'
                            className='mt-[57px] ml-[30px] text-[35px] font-bold'>Bay</p>
                        <p
                            id='lastname'
                            className='mt-[57px] ml-[10px] text-[35px] font-bold'>Kdang</p>

                        <button
                            type='button'
                            className='absolute mt-[25px] ml-[800px]'>
                            <img
                                className='w-[22px] h-[22px]'
                                src="../../public/images/pencil.png"
                                alt="Edit" />
                        </button>
                    </div>
                    <p
                        id='bios'
                        className='mt-[20px] ml-[30px] text-[20px]'>Something is here.</p>
                    <div className='flex ml-[30px] mt-[8px]'>
                        <address
                            id='city'
                            className='text-[#ADA3A3] text-[14px]'>Phnom Penh</address>
                        <p className='mr-1 text-[#ADA3A3] text-[14px]'>,</p>
                        <address
                            id='country'
                            className='text-[#ADA3A3] text-[14px]'>Cambodia</address>
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
                                className='w-[22px] h-[22px]'
                                src="../../public/images/addition.png"
                                alt="Edit" />
                        </button>
                        <button
                            type='button'
                            className='absolute mt-[25px] ml-[800px]'>
                            <img
                                className='w-[22px] h-[22px]'
                                src="../../public/images/pencil.png"
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
                            className='absolute mt-[25px] ml-[800px]'>
                            <img
                                className='w-[22px] h-[22px]'
                                src="../../public/images/pencil.png"
                                alt="Edit" />
                        </button>
                    </div>
                    <p
                        id='skills'
                        className='ml-[30px] mt-[15px] font-semibold'>Engineering</p>
                </div>
            </div>
        </>
    );
}

export default Profile;