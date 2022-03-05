import "./die.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Die() {
  const dieRoll = () => {
    toast(`🎲 You rolled ${Math.floor(Math.random() * 20 + 1)}!`);
  };

  return (
    <div>
      <img
        src="https://i.imgur.com/UCLyhz3.png"
        width="350"
        alt="D20 Drawing Icon"
        onClick={dieRoll}
        className="die"
      />
    </div>
  );
}
