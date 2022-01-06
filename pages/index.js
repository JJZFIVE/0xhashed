import Image from "next/image";
import JoinCommunity from "../components/JoinCommunity";
import styles from "../styles/index.module.css";
import transparentHashedLogo from "../public/transparentHashedLogo.png";
import flowchart from "../public/flowchart.png";
import Link from "next/link";
import { useEffect, useRef } from "react";
import homepageSpotlight from "../public/homepageSpotlight.png";

export default function Home() {
  const scrollRef = useRef(null);

  const executeScroll = () =>
    scrollRef.current.scrollIntoView({ behavior: "smooth", block: "end" });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        console.log("Scrolled!");
      }
    });
  }, []);

  return (
    <div className="text-white">
      <div className="flex justify-between mt-20">
        <div className="flex flex-col h-60 justify-between ml-28 mt-4">
          <div>
            <h1 className="text-6xl">Learn with a community.</h1>
            <h1 className="text-6xl mt-2">Build with experts</h1>
          </div>
          <h3 className="text-3xl w-2/3 mt-12">
            Creating the{" "}
            <span className="text-purple-500">next generation</span> of industry
            leaders in <span className="text-purple-500">blockchain</span>
          </h3>
          <div className="w-2/3 mt-16 text-2xl">
            <button
              onClick={executeScroll}
              className="px-6 py-3 border rounded-xl hover:opacity-70"
            >
              I'm a Developer
            </button>

            <Link href="/clients">
              <button className="px-12 py-3 rounded-xl bg-purple-700 ml-24 hover:opacity-70">
                I'm a Client
              </button>
            </Link>
          </div>
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
      <div ref={scrollRef} className="flex flex-col items-center mt-4">
        <Image
          src={flowchart}
          height="450"
          width="1200"
          draggable="false"
        ></Image>
      </div>
      <div className="text-3xl flex justify-between flex-row mt-40">
        <Link href="/community">
          <a>
            <h3 className="ml-32 hover:underline">Community &#8594;</h3>
          </a>
        </Link>
        <Link href="/agency">
          <a>
            <h3 className="mr-24 hover:underline">Agency &#8594;</h3>
          </a>
        </Link>

        <h3 className=""> </h3>
      </div>

      <div className="flex flex-row justify-between mt-8 mx-32 h-[400px] mb-80">
        <div className="flex flex-col justify-between h-5/6">
          <div className="">
            <div className="z-50 px-12 py-4 w-[43%] bg-uniswap-dark-gray-box rounded-2xl border-2 border-gray-400 text-left flex flex-col justify-center absolute">
              <p className="text-3xl">
                The 0xHashed Community is a hub for anyone who wants to learn or
                teach blockchain development
              </p>
            </div>
          </div>
          <div className="">
            <div className="z-30 px-12 py-4 w-[43%] bg-uniswap-dark-gray-box rounded-2xl border-2 border-gray-400 text-left flex flex-col justify-center absolute">
              <p className="text-3xl">
                The Community emphasizes learning through building projects in
                small groups
              </p>
            </div>
          </div>
          <div className="">
            <div className="z-10 px-12 py-4 w-[43%] bg-uniswap-dark-gray-box rounded-2xl border-2 border-gray-400 text-left flex flex-col justify-center absolute">
              <p className="text-3xl">
                Innovative projects are featured in the Community Spotlight on
                the website, in Discord, and on Twitter
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between mt-20 text-black">
          <div className="">
            <div className="z-40 px-12 py-4 w-[43%] bg-uniswap-light-gray-box rounded-2xl border-2 border-gray-200 text-left flex flex-col justify-center absolute">
              <p className="text-3xl">
                The 0xHashed Agency consists of industry experts who deliver
                complex project solutions to clients
              </p>
            </div>
          </div>
          <div className="">
            <div className="z-20 px-12 py-4 w-[43%] bg-uniswap-light-gray-box rounded-2xl border-2 border-gray-200 text-left flex flex-col justify-center absolute">
              <p className="text-3xl">
                The Agency hires the best engineers and business minds
                exclusively from the Community
              </p>
            </div>
          </div>
          <div className="">
            <div className="z-0 px-12 py-4 w-[43%] bg-uniswap-light-gray-box rounded-2xl border-2 border-gray-200 text-left flex flex-col justify-center absolute">
              <p className="text-3xl">
                Agency developers give back to the Community by offering
                assistance and knowledge to learners
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between"></div>
      </div>

      <div className="flex flex-row justify-between mx-32 my-40">
        <div className="w-1/2">
          <Link href="/spotlight">
            <a>
              <h2 className="text-6xl hover:underline">Spotlight &#8594;</h2>
            </a>
          </Link>
          <p className="text-uniswap-gray text-2xl pt-10">Coming Soon</p>
        </div>
        <Image
          src={homepageSpotlight}
          height="550"
          width="1000"
          draggable="false"
        ></Image>
      </div>

      <JoinCommunity />
    </div>
  );
}
