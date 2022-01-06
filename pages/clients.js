import { useRef, useState, useEffect } from "react";
import anime from "animejs";

export default function Clients() {
  const scrollRef = useRef(null);

  const executeScroll = () =>
    scrollRef.current.scrollIntoView({ behavior: "smooth", block: "end" });

  useEffect(() => {
    anime({
      targets: ".clientsFade",
      opacity: [0, 1],
      delay: anime.stagger(500),
      duration: 5000,
    });
  }, []);

  return (
    <div className="text-white">
      <div className="pt-24 mx-28 pb-16 flex justify-between border-b border-gray-300 border-opacity-50">
        <div className="flex flex-col justify-between h-52">
          <h1 className="text-6xl clientsFade">Clients</h1>
          <div className="w-2/3 h-24">
            <p className="text-3xl clientsFade">
              Have a <span className="text-purple-500">big idea</span> and need
              it developed? Let our expert crypto devs{" "}
              <span className="text-purple-500">hash it out</span> for you!
            </p>
            <button
              onClick={executeScroll}
              className="px-12 py-3 rounded-xl bg-purple-700 mt-6 text-xl hover:opacity-70 animate-fadeInFast"
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
        Loading
      </iframe>
    </div>
  );
}
