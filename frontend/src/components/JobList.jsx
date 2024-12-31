import React from 'react';

const JobCard = ({ job, onClick }) => {
  return (
    <div 
      className="bg-white p-4 rounded-lg shadow-md mb-4 cursor-pointer border-gray-500" 
      onClick={() => onClick(job)}
    >
      <h3 className="text-xl font-bold">{job.title}</h3>
      <p className="text-sm text-gray-500">{job.company}</p>
      <p className="text-sm text-gray-400">{job.location}- {job.workplace}</p>
      <p className="text-sm text-gray-300">{job.type}</p>
    </div>
  );
};

export default JobCard;
