import Link from "next/link";
import Image from "next/image";
import transparentHashedLogo from "../public/transparentHashedLogo.png";
import textLogo from "../public/textLogo.png";
import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import { useRouter } from "next/router";

export default function Navbar() {
  const [textLogoVisible, setTextLogoVisible] = useState(true);
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 500) {
        setTextLogoVisible(false);
      } else {
        setTextLogoVisible(true);
      }
    });
  }, []);

  return (
    <div>
      <Head>
        <title>0xHashed</title>
        <meta name="description" content="By the 0xHashed Creators" />
        <link rel="icon" href="/hashedLogo.png" />
      </Head>
      <nav className="bg-uniswap-bg text-uniswap-gray backdrop-filter backdrop-blur-sm bg-opacity-30 fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-between items-center">
          <div className="max-w-2xl pl-5 mt-2 mb-2">
            <ul className="flex space-x-6 text-xl items-center">
              <Link href="/">
                <li>
                  <button>
                    <Image
                      src={transparentHashedLogo}
                      alt="0xHashed Logo"
                      width="50"
                      height="50"
                      draggable="false"
                    ></Image>
                    {textLogoVisible ? (
                      <Image
                        src={textLogo}
                        alt="0xHashed"
                        width="200"
                        height="50"
                        draggable="false"
                        className={styles.hashedText}
                      ></Image>
                    ) : (
                      <div></div>
                    )}
                  </button>
                </li>
              </Link>
            </ul>
          </div>
          <div className="max-w-2xl pl-5 mr-8">
            <ul className="flex space-x-6 text-lg items-center ">
              <Link href="/community">
                <li
                  className={
                    router.pathname == "/community" ? "text-gray-300" : ""
                  }
                >
                  <button className="hover:opacity-70">Community</button>
                </li>
              </Link>
              <Link href="/agency">
                <li
                  className={
                    router.pathname == "/agency" ? "text-gray-300" : ""
                  }
                >
                  <button className="hover:opacity-70">Agency</button>
                </li>
              </Link>
              <Link href="/spotlight">
                <li
                  className={
                    router.pathname == "/spotlight" ? "text-gray-300" : ""
                  }
                >
                  <button className="hover:opacity-70">Spotlight</button>
                </li>
              </Link>
              <Link href="/clients">
                <li
                  className={
                    router.pathname == "/clients"
                      ? "text-white "
                      : "text-gray-300 "
                  }
                >
                  <button className="bg-purple-700 px-8 py-2 border-2 border-gray-600 rounded-xl  hover:opacity-70">
                    Clients
                  </button>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
