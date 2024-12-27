import React from "react";
import JobList from "./JobList";
import JobDetails from "./JobDetails";

const JobBoardLayout = ({ jobs, selectedJob, setSelectedJob }) => {
  return (
    <div className="max-w-7xl mx-auto bg-white p-6 shadow-md rounded-lg mt-6">
      <div className="flex">
        {/* Left Side: Job List */}
        <JobList jobs={jobs} onJobClick={setSelectedJob} />

        {/* Right Side: Job Details */}
        {selectedJob && <JobDetails job={selectedJob} />}
      </div>
    </div>
  );
};

export default JobBoardLayout;