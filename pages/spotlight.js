import styles from "../styles/spotlight.module.css";
import anime from "animejs";
import { useEffect } from "react";

export default function Spotlight() {
  useEffect(() => {
    anime({
      targets: ".spotlightText",
      duration: 1700,
      opacity: [0, 1],
      easing: "linear",
      loop: false,
    });
    anime({
      targets: ".spotlightText",
      keyframes: [{ translateY: 160 }],
      duration: 1500,
      easing: "easeOutElastic(1, 0.5)",
      loop: false,
    });
  }, []);

  return (
    <div className="h-screen">
      <div className={styles.translate}>
        <h1 className="text-6xl text-center text-white pt-0 border-b border-gray-300 border-opacity-50 mx-28 pb-8 spotlightText">
          Creator <span className="text-purple-300">Spotlight</span> is Coming
          Soon
        </h1>
      </div>
    </div>
  );
}
