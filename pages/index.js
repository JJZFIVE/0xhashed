import Image from "next/image";
import JoinCommunity from "../components/JoinCommunity";
import styles from "../styles/index.module.css";
import transparentHashedLogo from "../public/transparentHashedLogo.png";
import flowchart from "../public/flowchart.png";

export default function Home() {
  return (
    <div className="text-white">
      <div className="flex justify-between mt-20">
        <div className="flex flex-col h-60 justify-between ml-28 mt-4">
          <div>
            <h1 className="text-6xl">Learn with a community.</h1>
            <h1 className="text-6xl mt-2">Build with experts</h1>
          </div>
          <h3 className="text-3xl w-2/3">
            Creating the next generation of industry leaders in blockchain{" "}
          </h3>
        </div>
        <div className="mr-52">
          <div className={styles.translate}>
            <Image
              src={transparentHashedLogo}
              height="250"
              width="250"
              draggable="false"
            ></Image>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-96 text-center">
        <h2 className="text-4xl">Two Halves Make a Whole</h2>
        <div className="w-1/2 mt-4">
          <p className="text-uniswap-gray text-2xl">
            0xHashed is 50% prestigious blockchain development agency and 50%
            community with an emphasis on learning through doing
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-4">
        <Image
          src={flowchart}
          height="400"
          width="1200"
          draggable="false"
        ></Image>
      </div>

      <JoinCommunity />
    </div>
  );
}
