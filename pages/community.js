import Image from "next/image";
import hashingPeople from "../public/hashingPeople.png";
import JoinCommunity from "../components/JoinCommunity";
import { useEffect } from "react";
import anime from "animejs";

export default function Community() {
  useEffect(() => {
    anime({
      targets: ".communityFade",
      opacity: [0, 1],
      delay: anime.stagger(500),
      duration: 5000,
    });
  }, []);
  return (
    <div className="text-white">
      <div className="pt-24 mx-28 pb-8 flex justify-between border-b border-gray-300 border-opacity-50">
        <div className="flex flex-col justify-between h-32">
          <h1 className="text-6xl communityFade">Community</h1>
          <p className="text-3xl communityFade">
            <span className="text-purple-500">Find</span> a team,{" "}
            <span className="text-purple-500">post</span> your progress, and{" "}
            <span className="text-purple-500">get noticed</span> by blockchain
            organizations
          </p>
        </div>
      </div>
      <div className="my-24 text-center communityFade flex flex-col items-center">
        <h1 className="text-4xl">Hashing a Beginner to an Expert</h1>
        <p className="text-uniswap-gray w-1/2 mt-10">
          "Hashing" is a relevant function in computer science that takes an
          arbitrary input type and outputs a number based off of the profile of
          the input. At 0xHashed, our goal is to "Hash" the Community to output
          a wealth of blockchain experts, leaders, and next-generation thinkers.
        </p>
        <div className="my-12">
          <Image
            src={hashingPeople}
            height="250"
            width="1000"
            draggable="false"
          ></Image>
        </div>
      </div>
      <div className="communityFade">
        <JoinCommunity />
      </div>
    </div>
  );
}
