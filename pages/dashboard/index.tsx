import React from "react";
import {
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
  useOrganization,
} from "@clerk/nextjs";
import { GetServerSideProps } from "next";

const Dashboard = () => {
  const { isSignedIn, isLoaded, user }: any = useUser();

  const { organization, isLoaded: isOrgLoaded }: any = useOrganization();

  return (
    // Layout
    <div className="flex">
      {/* Sidebar */}
      <div
        className="flex flex-col h-screen w-64 border border-gray-200 border-solid"
        style={{ padding: 16 }}
      >
        <div className="flex items-center hover:bg-gray-100 rounded-md transition-all cursor-pointer p-2">
          <img
            src={organization.logoUrl}
            alt="Organization Logo"
            className="h-8 w-8 rounded-md mr-2"
          />
          <h1 className="font-semibold">{organization.name}</h1>
        </div>
      </div>
      <div className="flex flex-col h-screen w-full">
        {/* Header */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 20,
            width: "100%",
          }}
        >
          <h1>My App</h1>

          <SignedIn>
            {/* Mount the UserButton component */}
            <UserButton />
          </SignedIn>
          <SignedOut>
            {/* Signed out users get sign in button */}
            <RedirectToSignIn />
          </SignedOut>
        </header>
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
