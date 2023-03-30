import React from "react";
import { useRouter } from "next/router";
import Job from "@/types/Job";

const JobPreview = ({ job }: { job: Job }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/dashboard/jobs/${job.id}`)}
      key={job.id}
      className="bg-white hover:bg-gray-100 rounded-md transition-all border border-solid border-gray-300 p-4 mb-4 flex justify-between cursor-pointer"
    >
      <div className="flex flex-col">
        <h2 className="font-bold text-xl mb-1">{job.title}</h2>
        <div className="flex">
          <p className="text-gray-500 mr-2">{job.location}</p>
          <p className="text-gray-500 mr-2">|</p>
          <p className="text-gray-500 mr-2">{job.type}</p>
          <p className="text-gray-500 mr-2">|</p>
          <p className="text-gray-500 mr-2">{job.department}</p>
          <p className="text-gray-500 mr-2">|</p>
          <p className="text-gray-500 mr-2">${job.salary}</p>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-gray-500 mb-1">Applicants</p>
        <p className="font-bold text-xl">{job.applicants.length}</p>
      </div>
    </div>
  );
};

export default JobPreview;
