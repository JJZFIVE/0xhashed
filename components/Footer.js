import Link from "next/link";
import Image from "next/image";

import discordUnselected from "../public/discordUnselected.png";
import githubUnselected from "../public/githubUnselected.png";
import twitterUnselected from "../public/twitterUnselected.png";

// Add hover color change

export default function Footer() {
  return (
    <footer className="bg-uniswap-bg mt-8 py-2">
      <div className="flex justify-between">
        <div className="text-uniswap-gray ml-6 flex items-center">
          <ul className="flex space-x-6 text-md items-center">
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
                <button>Clients</button>
              </li>
            </Link>
          </ul>
        </div>
        <div className="mr-6">
          <ul className="flex space-x-6 items-center">
            <li>
              <a
                href="https://discord.com/invite/VU5kNNk2PR"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image src={discordUnselected} height="35" width="35"></Image>
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image src={githubUnselected} height="35" width="35"></Image>
              </a>
            </li>
            <li>
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
