export default function Agency() {
  return (
    <div className="text-white">
      <div className="pt-24 mx-28 pb-8 flex justify-between border-b border-gray-300 border-opacity-50">
        <div className="flex flex-col justify-between h-52">
          <h1 className="text-6xl">Agency</h1>
          <div className="w-1/2 h-24">
            <p className="text-3xl">
              The 0xHashed Agency is a{" "}
              <span className="text-purple-700">prestigious</span> group of
              full-time blockchain{" "}
              <span className="text-purple-700">experts</span> who build crypto
              projects for <span className="text-purple-700">clients</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between my-20">
        <div className="ml-28 mr-8">
          <div className="py-4 px-4 bg-uniswap-dark-gray-box flex flex-col justify-between rounded-xl border border-gray-500 my-2">
            <h3 className="text-3xl">Community Sourced</h3>
            <p className="text-xl text-uniswap-gray">
              We only hire directly out of the Community
            </p>
          </div>
          <div className="py-4 px-4 bg-uniswap-dark-gray-box flex flex-col justify-between rounded-xl border border-gray-500 my-2">
            <h3 className="text-3xl">Open Jobs</h3>
            <p className="text-xl text-uniswap-gray">
              Click here to see open positions
            </p>
          </div>
          <div className="py-4 px-4 bg-uniswap-dark-gray-box flex flex-col justify-between rounded-xl border border-gray-500 my-2">
            <h3 className="text-3xl">How to Apply</h3>
            <p className="text-xl text-uniswap-gray">
              Hiring information is found under #hiring in our Discord
            </p>
          </div>
        </div>
        <div className="mr-28 ml-8 px-8 py-8 flex flex-col justify-start rounded-xl border border-gray-500 bg-purple-500 bg-opacity-50 my-2">
          <h3 className="text-3xl">Our Hiring Approach</h3>
          <div className="w-1/2 text-xl">
            <p>
              We source the best engineers from the Community who exhibit some
              or all of the following properties:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
