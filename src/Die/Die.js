import "./die.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Die() {
  const [isAnimated, setIsAnimated] = useState(false);
  const dieRoll = () => {
    toast(`🎲 You rolled ${Math.floor(Math.random() * 20 + 1)}!`);
  };

  return (
    <div className="dieBG">
      <motion.img
        src="https://i.imgur.com/UCLyhz3.png"
        width="350"
        alt="D20 Drawing Icon"
        onClick={dieRoll}
        className="die"
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
