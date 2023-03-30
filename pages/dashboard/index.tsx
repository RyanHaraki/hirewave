import React from "react";
import { useUser } from "@clerk/nextjs";
import { GetServerSideProps } from "next";
import Header from "@/components/dashboard/Header";
import { useRouter } from "next/router";
import JobPreview from "@/components/dashboard/JobPreview";
import Job from "@/types/Job";
import { Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
const mockJobs: Job[] = [
  {
    id: 1,
    title: "Software Engineer",
    applicants: [
      {
        id: 1,
        name: "John Doe",
        email: "john@doe.com",
        resume: "https://www.example.com/resume.pdf",
      },
    ],
    description:
      "We are looking for a software engineer to join our team. You will be responsible for building and maintaining our web application.",
    location: "Remote",
    type: "Full Time",
    salary: "100,000",
    department: "Engineering",
  },
];

const Dashboard = () => {
  const router = useRouter();
  const { isSignedIn, isLoaded, user }: any = useUser();

  return (
    // Layout

    <div className="flex flex-col h-screen w-full">
      {/* Job Section */}
      <div className="flex flex-col items-center h-screen w-full p-12">
        <div className="lg:w-1/2 w-full">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-gray-500 mb-12">
                View your jobs and applicants
              </p>
            </div>

            <Button
              onClick={() => router.push("/jobs/create")}
              rightIcon={<AddIcon />}
              colorScheme="blue"
            >
              Add New Job
            </Button>
          </div>
          {/* Render jobs */}

          {mockJobs.map((job) => (
            <JobPreview job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async ({
  req,
  resolvedUrl,
}) => {
  // do any database lookups here using the userId

  // return props
  return {
    props: {},
  };
};
