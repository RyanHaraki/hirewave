import React from "react";
import Header from "./Header";
import LandingHeader from "../landing/LandingHeader";
import { SignedIn, SignedOut } from "@clerk/nextjs";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <SignedIn>
        <Header />
      </SignedIn>
      <SignedOut>
        <LandingHeader />
      </SignedOut>

      {children}
    </>
  );
};

export default Layout;
