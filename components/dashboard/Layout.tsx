import React from "react";
import Header from "./Header";
import LandingHeader from "../landing/LandingHeader";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { useRouter } from "next/router";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  return (
    <>
      <div>
        {router.pathname === "/" ? <LandingHeader /> : <Header />}

        {children}
      </div>
    </>
  );
};

export default Layout;
