import { useMemo } from "react";
import "./coin.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Coin() {
  const coinSide = useMemo(() => ["heads", "tails"], []);
  const coinFlip = () => {
    toast(`🟡 You got ${coinSide[Math.round(Math.random())]}!`);
  };

  return (
    <div>
      <img
        src="https://www.iconpacks.net/icons/1/free-heads-or-tails-icon-456-thumb.png"
        onClick={coinFlip}
        className="coin"
        alt="coin"
      />
    </div>
  );
}
