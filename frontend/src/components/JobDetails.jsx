import React from "react";

const JobDetails = ({ job }) => {
  if (!job) return <div>Select a job to see details</div>;

  return (
    <div className="w-1/2 p-6">
      <h1 className="text-2xl font-bold">{job.title}</h1>
      <p className="text-gray-700">{job.company}</p>
      <p className="text-gray-700">{job.location}</p>
      <div className="mt-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded mr-2">Get Contact</button>
        <button className="bg-gray-300 px-4 py-2 rounded">Share</button>
      </div>

      <div className="mt-6">
        <h2 className="font-bold text-xl">About this job</h2>
        <p className="text-gray-700 mt-2">{job.details.description}</p>

        <h3 className="font-bold mt-4">Job Responsibilities</h3>
        <ul className="list-disc pl-6 text-gray-700">
          {job.details.responsibilities.map((res, index) => (
            <li key={index}>{res}</li>
          ))}
        </ul>

        <h3 className="font-bold mt-4">Qualifications</h3>
        <p className="text-gray-700">{job.details.qualifications}</p>
      </div>
    </div>
  );
};

export default JobDetails;