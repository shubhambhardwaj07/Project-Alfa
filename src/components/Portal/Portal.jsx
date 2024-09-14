// components/Portal.js
import { createPortal } from "react-dom";

export const Portal = ({ children, containerId }) => {
  const container = document.getElementById(containerId);
  return createPortal(children, container);
};
