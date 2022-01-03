import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-uniswap-bg mt-8 py-4">
      <div className="text-uniswap-gray ml-6">
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
    </footer>
  );
}
