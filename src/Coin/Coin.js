import { useMemo } from "react";
import "./coin.css";
import { motion } from "framer-motion";
import { useState } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Coin() {
  const [isAnimated, setIsAnimated] = useState(false);
  const coinSide = useMemo(() => ["heads", "tails"], []);
  const coinFlip = () => {
    toast(`🟡 You got ${coinSide[Math.round(Math.random())]}!`);
  };

  return (
    <div className="coinBG">
      <motion.img
        src="https://www.iconpacks.net/icons/1/free-heads-or-tails-icon-456-thumb.png"
        onClick={coinFlip}
        className="coin"
        alt="coin"
        animate={{
          /* x: isAnimated ? 500 : 0, */
          /* opacity: isAnimated ? 1 : 0.5, */
          rotate: isAnimated ? 360 : 0
        }}
        transition={{
          type: "spring"
        }}
        onMouseEnter={() => setIsAnimated(!isAnimated)}
      />
    </div>
  );
}
