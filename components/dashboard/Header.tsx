import React from "react";
import {
  SignedIn,
  SignedOut,
  UserButton,
  RedirectToSignIn,
  useOrganization,
} from "@clerk/nextjs";

const Header = () => {
  const { organization, isLoaded: isOrgLoaded }: any = useOrganization();

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        width: "100%",
      }}
      className="border-b border-gray-300 border-solid px-6 py-3"
    >
      <div className="flex items-center hover:bg-gray-100 rounded-md transition-all cursor-pointer p-2">
        {isOrgLoaded && (
          <>
            <img
              src={organization.logoUrl}
              alt="Organization Logo"
              className="h-8 w-8 rounded-md mr-2"
            />
            <h1 className="font-semibold">{organization.name}</h1>
          </>
        )}
      </div>

      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <RedirectToSignIn />
      </SignedOut>
    </header>
  );
};

export default Header;
