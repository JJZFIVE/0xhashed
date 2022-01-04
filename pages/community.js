import Image from "next/image";
import hashingPeople from "../public/hashingPeople.png";
import JoinCommunity from "../components/JoinCommunity";

export default function Community() {
  return (
    <div className="text-white">
      <div className="pt-24 mx-28 pb-8 flex justify-between border-b border-gray-300 border-opacity-50">
        <div className="flex flex-col justify-between h-32">
          <h1 className="text-6xl">Community</h1>
          <p className="text-3xl">
            <span className="text-purple-700">Find</span> a team,{" "}
            <span className="text-purple-700">post</span> your progress, and{" "}
            <span className="text-purple-700">get noticed</span> by blockchain
            organizations
          </p>
        </div>
      </div>
      <div className="my-24 text-center">
        <h1 className="text-4xl">Hashing a Beginner to an Expert</h1>
        <br />
        <p className="text-uniswap-gray">Let William write this</p>
        <div className="my-12">
          <Image
            src={hashingPeople}
            height="250"
            width="1000"
            draggable="false"
          ></Image>
        </div>
      </div>
      <JoinCommunity />
    </div>
  );
}
