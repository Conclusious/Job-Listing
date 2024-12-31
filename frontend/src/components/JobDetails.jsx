import React from 'react';

const JobDetails = ({ job }) => {
  if (!job) return <div className="p-4 text-white">Please select a job to see details</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full">
      <h2 className="text-2xl font-bold mb-4">{job.title}</h2>
      <p className="text-xl text-gray-700 mb-2"><strong>Company:</strong> {job.company}</p>
      <p className="text-sm text-gray-500 mb-4">{job.location}</p>
      <p className="mb-2"><strong>Type:</strong> {job.type}</p>
      <p className="mb-2"><strong>Workplace:</strong> {job.workplace}</p>
      <p className="mb-2"><strong>Contact:</strong> {job.contact}</p>
      <p className="mb-2"><strong>Description:</strong> {job.details.description}</p>
    </div>
  );
};

export default JobDetails;
