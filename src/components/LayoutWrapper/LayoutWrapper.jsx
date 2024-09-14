"use client";
import { useEffect, useState } from "react";
import { Hamburger } from "../Hambuger/Hamburger";
import { FlipNav } from "../NavBar/NavBar";
import { InitialLoader } from "../InitialLoader/InitialLoader";

export const LayoutWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200000000);
  }, []);

  return (
    <>
      {isLoading && <InitialLoader />}

      <div>
        <FlipNav />
        <Hamburger />
        {children}
      </div>
    </>
  );
};
