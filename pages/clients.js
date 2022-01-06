import { useRef } from "react";

export default function Clients() {
  const scrollRef = useRef(null);

  const executeScroll = () =>
    scrollRef.current.scrollIntoView({ behavior: "smooth", block: "end" });

  return (
    <div className="text-white">
      <div className="pt-24 mx-28 pb-16 flex justify-between border-b border-gray-300 border-opacity-50">
        <div className="flex flex-col justify-between h-52">
          <h1 className="text-6xl">Clients</h1>
          <div className="w-2/3 h-24">
            <p className="text-3xl">
              Have a <span className="text-purple-500">big idea</span> and need
              it developed? Let our expert crypto devs{" "}
              <span className="text-purple-500">hash it out</span> for you!
            </p>
            <button
              onClick={executeScroll}
              className="px-12 py-3 rounded-xl bg-purple-700 mt-6 text-xl hover:opacity-70"
            >
              Fill Out a Proposal
            </button>
          </div>
        </div>
      </div>

      <iframe
        ref={scrollRef}
        src="https://joe0xhashed.wispform.com/7bd6d99b"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        height="840"
        width="100%"
      >
        Loading...
      </iframe>
    </div>
  );
}
