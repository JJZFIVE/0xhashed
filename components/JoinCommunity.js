import Image from "next/image";
import Link from "next/link";

export default function JoinCommunity() {
  return (
    <div className="mt-20 mb-12 text-center text-white flex flex-col justify-between h-40">
      <h2 className="text-4xl">Join the Community</h2>
      <div className="">
        <p className="text-2xl">
          Start your 0xHashed adventure by joining our Discord and following our
          Twitter
        </p>
      </div>
      <div className="flex justify-center">
        <Link href="/">
          <button className="px-8 py-1 border-2 border-purple-700 rounded-xl text-xl mr-3">
            Twitter
          </button>
        </Link>
        <Link href="/">
          <button className="px-8 py-1 rounded-xl text-xl bg-purple-700 ml-3">
            Discord
          </button>
        </Link>
      </div>
    </div>
  );
}
