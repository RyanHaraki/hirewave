import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { GetServerSideProps } from "next";
import { getAuth } from "@clerk/nextjs/server";
import clerkClient from "@clerk/clerk-sdk-node";

const Dashboard = () => {
  const { isSignedIn, isLoaded, user }: any = useUser();

  return (
    <header
      style={{ display: "flex", justifyContent: "space-between", padding: 20 }}
    >
      <h1>My App</h1>

      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton />
      </SignedOut>
    </header>
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
