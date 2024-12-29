import React from "react";

// Add the missing gotoHome function
const gotoHome = () => {
  console.log('gotoHome called');
        navigate('/');
};

const JobList = ({ jobs, onJobClick }) => {
  return (
    <>
    {/* Header Container */}
    <div className="fixed top-0 left-0 w-full bg-white h-[100px] z-50 shadow">
        <div className="flex justify-between items-center px-8 h-full">
          <h1
            className="text-blue-800 font-merriweather-sans font-bold text-[30px] cursor-pointer"
            onClick={gotoHome}
          >
            MuYMuY
          </h1>
          <div className="flex w-[1000px]">
            <input
              placeholder="Search the job title or companies"
              className="w-[450px] h-[35px] shadow-inner border-[3px] border-r-0 rounded-l-[5px] indent-2"
            />
            <button
              type="button"
              className="w-[75px] h-[35px] shadow-inner border-[3px] rounded-r-[5px]"
            >
              <img
                className="w-[24px] h-[24px]"
                src="/images/search-profile.png" // Corrected image path
                alt="Search"
                onError={() => console.log("Image not found")}
              />
            </button>
          </div>
        </div>
      </div>
      {/* Job List Container */}
      <div className="w-1/2 p-4 border-r border-white-300">
        {jobs.map((job) => (
          <div
          key={job.id}
          className="p-4 border-b cursor-pointer hover:bg-gray-100"
          onClick={() => onJobClick(job)}
          >
            <h2 className="font-bold text-lg">{job.title}</h2>
            <p className="text-gray-600">{job.company}</p>
            <p className="text-gray-600">{job.location}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default JobList;