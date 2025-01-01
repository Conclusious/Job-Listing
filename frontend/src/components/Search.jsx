import React, { useState, useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import JobCard from './JobList';
import JobDetails from './JobDetails';

const Search = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate('/');
  };
  
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:5000/jobs');
        const data = await response.json();
        setJobs(data);
        setFilteredJobs(data);

        const params = new URLSearchParams(location.search);
        const query = params.get('query');
        if (query) {
          setSearchQuery(query);
          filterJobs(query, data);
        }
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, [location.search]);

  const filterJobs = (query, jobsData = jobs) => {
    if (!query.trim()) {
      setFilteredJobs(jobsData);
      return;
    }

    const filtered = jobsData.filter(job =>
      job.title.toLowerCase().includes(query.toLowerCase()) ||
      job.company.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    filterJobs(searchQuery);
  };

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  return (
    <div className="min-h-screen bg-blue-950">
      {/* Header Container */}
      <div className="sticky top-0 z-50 flex justify-between items-center bg-white h-[100px] shadow-md px-8">
        <h1
          className="text-blue-800 font-merriweather-sans font-bold text-[30px] hover:cursor-pointer hover:text-blue-600 transition-colors"
        onClick={handleLogoClick}>
          MuYMuY
        </h1>
        <form onSubmit={handleSearch} className="flex w-[520px]">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search the job title or companies"
            className="w-[450px] h-[35px] shadow-inner border-[3px] border-r-0 rounded-l-[5px] indent-2 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="place-items-center w-[75px] h-[35px] shadow-inner border-[3px] rounded-r-[5px] hover:bg-gray-50 transition-colors"
          >
            <img
              className="w-[24px] h-[24px] mx-auto"
              src="/images/search-profile.png"
              alt="Search"
            />
          </button>
        </form>
      </div>

      {/* Content Section */}
      <div className="flex px-8 py-6 gap-6 max-w-[1400px] mx-auto">
        <div className="w-1/2 space-y-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <JobCard
                key={job._id}
                job={job}
                onClick={() => handleJobClick(job)}
                isSelected={selectedJob?._id === job._id}
              />
            ))
          ) : (
            <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
            <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow w-full max-w-[600px]">
              <h3 className="text-xl font-semibold text-gray-700">No Results Found</h3>
              <p className="text-gray-500 text-center mt-2">
                We couldn't find any jobs matching your search criteria
              </p>
            </div>
          </div>
          )}
        </div>
        <div className="w-1/2 sticky top-[120px]">
          {selectedJob && <JobDetails job={selectedJob} />}
        </div>
      </div>
    </div>
  );
};

export default Search;