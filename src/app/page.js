import { HomeArt } from "@/components/HomeArt/HomeArt";
import styles from "./page.module.css";
import { Contribution } from "@/components/Contribution/Contribution";

export default function Home() {
  return (
    <div className={styles.page}>
      <HomeArt />
      <Contribution />
    </div>
  );
}
