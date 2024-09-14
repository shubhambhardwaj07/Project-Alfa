import Link from "next/link";
import { TransitionLink } from "../TransitionLink/TransitionLink";

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return <div>Shubham Bhardwaj</div>;
};

export const FlipNav = () => {
  return (
    <nav className="p-4 flex items-center justify-between relative">
      <NavLeft />
    </nav>
  );
};

const NavLeft = () => {
  return (
    <div className="flex items-center gap-6">
      <TransitionLink href="/">
        <Logo />
      </TransitionLink>
    </div>
  );
};
