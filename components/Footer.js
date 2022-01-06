import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import discordUnselected from "../public/discordUnselected.png";
import githubUnselected from "../public/githubUnselected.png";
import twitterUnselected from "../public/twitterUnselected.png";

// Add hover color change

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="bg-uniswap-bg mt-8 py-2">
      <div className="flex justify-between">
        <div className="text-uniswap-gray ml-6 flex items-center">
          <ul className="flex space-x-6 text-md items-center">
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
                className={router.pathname == "/agency" ? "text-gray-300" : ""}
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
                className={router.pathname == "/clients" ? "text-gray-300" : ""}
              >
                <button className="hover:opacity-70">Clients</button>
              </li>
            </Link>
          </ul>
        </div>
        <div className="mr-6">
          <ul className="flex space-x-6 items-center">
            <li className="hover:opacity-70">
              <a
                href="https://discord.com/invite/VU5kNNk2PR"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image src={discordUnselected} height="35" width="35"></Image>
              </a>
            </li>
            <li className="hover:opacity-70">
              <a
                href="https://github.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image src={githubUnselected} height="35" width="35"></Image>
              </a>
            </li>
            <li className="hover:opacity-70">
              <a
                href="https://twitter.com/0xhashed"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image src={twitterUnselected} height="45" width="45"></Image>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
