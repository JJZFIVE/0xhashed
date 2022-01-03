import Link from "next/link";
import Image from "next/image";
import hashedLogo from "../public/hashedLogo.png";
import Head from "next/head";

export default function Navbar() {
  return (
    <div>
      <Head>
        <title>0xHashed</title>
        <meta name="description" content="By the 0xHashed Creators" />
        <link rel="icon" href="/hashedLogo.png" />
      </Head>
      <header className="bg-uniswap-bg text-uniswap-gray">
        <div className="flex justify-between items-center">
          <div className="max-w-2xl pl-5 mt-2 mb-2">
            <ul className="flex space-x-6 text-xl items-center">
              <Link href="/">
                <li>
                  <button>
                    <Image
                      src={hashedLogo}
                      alt="0xHashed Logo"
                      width="75"
                      height="75"
                    ></Image>
                  </button>
                </li>
              </Link>
            </ul>
          </div>
          <div className="max-w-2xl pl-5 mr-8">
            <ul className="flex space-x-6 text-lg items-center ">
              <Link href="/community">
                <li>
                  <button>Community</button>
                </li>
              </Link>
              <Link href="/agency">
                <li>
                  <button>Agency</button>
                </li>
              </Link>
              <Link href="/spotlight">
                <li>
                  <button>Spotlight</button>
                </li>
              </Link>
              <Link href="/clients">
                <li>
                  <button className="bg-purple-600 px-4 py-2 border-2 border-gray-600 rounded-md text-white">
                    Clients
                  </button>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}