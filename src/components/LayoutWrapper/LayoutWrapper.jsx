"use client";
import { useEffect, useState } from "react";
import { Hamburger } from "../Hambuger/Hamburger";
import { NavBar } from "../NavBar/NavBar";
import { InitialLoader } from "../InitialLoader/InitialLoader";

export const LayoutWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {isLoading && <InitialLoader />}

      <div>
        <NavBar />
        <Hamburger />
        {children}
      </div>
    </>
  );
};
