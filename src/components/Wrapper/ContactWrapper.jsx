"use client";

import dynamic from "next/dynamic";
import { ContactForm } from "../ContactForm/ContactForm";

const PunjabMap = dynamic(
  () => import("../PunjabMap/PunjabMap").then((module) => module.PunjabMap),
  {
    ssr: false,
  }
);

export const ContactWrapper = () => {
  return (
    <>
      <PunjabMap />
      <ContactForm />
    </>
  );
};
