import Link from "next/link";
import { TransitionLink } from "../TransitionLink/TransitionLink";
import styles from "./Navbar.module.scss";

const Logo = () => {
  return <div className={styles.logo}>Shubham Bhardwaj</div>;
};
export const NavBar = () => {
  return (
    <TransitionLink href="/">
      <Logo />
    </TransitionLink>
  );
};
