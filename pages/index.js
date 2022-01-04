import Image from "next/image";
import JoinCommunity from "../components/JoinCommunity";
import styles from "../styles/index.module.css";
import transparentHashedLogo from "../public/transparentHashedLogo.png";

export default function Home() {
  return (
    <div>
      <p className="text-3xl text-white">Home</p>
      <div className={styles.translate}>
        <Image src={transparentHashedLogo} height="200" width="200"></Image>
      </div>

      <JoinCommunity />
    </div>
  );
}
