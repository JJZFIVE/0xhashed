import Link from "next/link";

export default function Agency() {
  return (
    <div className="text-white">
      <div className="pt-24 mx-28 pb-8 flex justify-between border-b border-gray-300 border-opacity-50">
        <div className="flex flex-col justify-between h-52">
          <h1 className="text-6xl">Agency</h1>
          <div className="w-1/2 h-24">
            <p className="text-3xl">
              The 0xHashed Agency is a{" "}
              <span className="text-purple-500">prestigious</span> group of
              full-time blockchain{" "}
              <span className="text-purple-500">experts</span> who build crypto
              projects for <span className="text-purple-500">clients</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between my-20">
        <div className="ml-28 mr-20">
          <Link href="/community">
            <button className="py-6 px-6 bg-uniswap-dark-gray-box flex flex-col justify-between rounded-xl border border-gray-500 mb-6 w-full">
              <h3 className="text-3xl">Community Sourced</h3>
              <p className="text-2xl text-uniswap-gray">
                We only hire directly out of the Community
              </p>
            </button>
          </Link>
          <a
            href="https://google.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="py-6 px-6 bg-uniswap-dark-gray-box flex flex-col justify-between rounded-xl border border-gray-500 my-6">
              <h3 className="text-3xl">Open Jobs</h3>

              <p className="text-2xl text-uniswap-gray">
                Click here to see open positions
              </p>
            </div>
          </a>
          <a
            href="https://discord.com/invite/VU5kNNk2PR"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="py-6 px-6 bg-uniswap-dark-gray-box flex flex-col justify-between rounded-xl border border-gray-500 mt-6">
              <h3 className="text-3xl">How to Apply</h3>
              <p className="text-2xl text-uniswap-gray">
                Hiring information is found under #hiring in our Discord
              </p>
            </div>
          </a>
        </div>
        <div className="mr-28 px-8 py-8 w-1/3 flex flex-col justify-start rounded-xl border border-gray-500 bg-purple-500 bg-opacity-50">
          <h3 className="text-3xl">Our Hiring Approach</h3>
          <div className="w-full text-lg mt-6">
            <p>
              We source the best engineers from the Community who exhibit some
              or all of the following properties:
            </p>
            <br />
            <ul>
              <li>- Clear passion for crypto innovation</li>
              <li>- Superior communication and teamwork</li>
              <li>- Active presence in the Community</li>
              <li>
                - Proof of substantial contributions to strong projects in the
                Community
              </li>
              <li>
                - Exceptional software dev skills or outstanding business dev
                abilities
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
