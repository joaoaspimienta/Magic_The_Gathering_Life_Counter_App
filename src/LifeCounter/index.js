import "./styles.css";
import { useState, useEffect } from "react";

export default function LifeCounter() {
  const [lifePoints, setLifePoints] = useState(20);
  const [playerName, setPlayerName] = useState("Player name");
  const [invincible, setInvincible] = useState(false);

  function reduceLifePoints() {
    setLifePoints(lifePoints - 1);
  }

  useEffect(() => {
    if (!invincible && lifePoints < 1) {
      alert(playerName + " lost!");
    }
  }, [invincible, lifePoints, playerName]);

  //lifePoints === 1 && alert(playerName + " lost!");

  return (
    <>
      <div className="lifeCounterArea">
        <div className="checkboxContainer">
          <div className="invincibleCheckbox">
            <input
              type="checkbox"
              id="invCheckbox"
              onClick={() => setInvincible(!invincible)}
            />
            <span>Invincible</span>
          </div>
        </div>

        <div className="botaoContainer">
          <h1 className="botaoFechar">X</h1>
        </div>

        <div className={!invincible && lifePoints < 1 ? "testeDead" : "teste"}>
          <div className="teste2">
            <div onClick={() => setPlayerName(prompt)} className="playerName">
              {playerName}
            </div>
          </div>

          <div className="teste2">
            <button onClick={reduceLifePoints}>-</button>
            <h1>{lifePoints}</h1>
            <button onClick={() => setLifePoints(lifePoints + 1)}>+</button>
            <br />
          </div>

          <div className="teste2">
            <button onClick={() => setLifePoints(20)}>Reset</button>
          </div>
        </div>
      </div>
    </>
  );
}
