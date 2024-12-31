import React, { useState, useEffect } from 'react';
import JobCard from './JobList';
import JobDetails from './JobDetails';

const Search = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:5000/jobs');
        const data = await response.json();
        setJobs(data);
        console.log(data); // Check the fetched data
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  return (
    <div>
      {/* Header Container */}
      <div className="flex justify-center items-center bg-white h-[100px] shadow-md">
        <h1
          className="absolute mr-[1000px] text-blue-800 font-merriweather-sans font-bold text-[30px] hover:cursor-pointer"
          // onClick={goToHome}
        >
          MuYMuY
        </h1>
        <div className="flex w-[520px]">
          <input
            placeholder="Search the job title or companies"
            className="w-[450px] h-[35px] shadow-inner border-[3px] border-r-0 rounded-l-[5px] indent-2"
          />
          <button
            type="button"
            className="place-items-center w-[75px] h-[35px] shadow-inner border-[3px] rounded-r-[5px]"
          >
            <img
              id="search"
              className="w-[24px] h-[24px]"
              src="/images/search-profile.png"
              alt="Search"
            />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row border-[2px] border-gray-300 overflow-hidden shadow-md bg-[#00202B] min-h-screen mt-0">
        {/* Left side - Job Cards */}
        <div className="w-full md:w-1/3 p-4 overflow-y-auto border-r-[2px] border-gray-300 bg-white">
          <h2 className="text-2xl font-bold mb-4 text-gray-800"></h2>
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} onClick={handleJobClick} />
          ))}
        </div>

        {/* Right side - Job Details */}
        <div className="w-full md:w-2/3 p-4 bg-white">
          <JobDetails job={selectedJob} />
        </div>
      </div>
</div>

  );
};

export default Search;
