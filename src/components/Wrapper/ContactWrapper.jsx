"use client";

import { ContactForm } from "../ContactForm/ContactForm";
import { PunjabMap } from "../PunjabMap/PunjabMap";

export const ContactWrapper = () => {
  if (typeof window !== "undefined") return <></>;
  return (
    <>
      <PunjabMap />
      <ContactForm />
    </>
  );
};
