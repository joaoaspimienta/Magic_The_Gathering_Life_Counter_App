import "./lifeCounter.css";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LifeCounter() {
  const [lifePoints, setLifePoints] = useState(20);
  const [playerName, setPlayerName] = useState("Player name");
  const [invincible, setInvincible] = useState(false);

  function reduceLifePoints() {
    setLifePoints(lifePoints - 1);
  }

  useEffect(() => {
    if (!invincible && lifePoints < 1) {
      playerName === "Player name"
        ? toast(`☠️ Guy who doesn't know how to write his own name is dead!`)
        : toast(`☠️ ${playerName} is dead!`);
    }
  }, [invincible, lifePoints, playerName]);

  //lifePoints === 1 && alert(playerName + " lost!");

  return (
    <>
      {/* 
      <div>
        {" "}
        <button onClick={notify}>Notify !</button>
      </div> */}
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
            <div
              onClick={() => setPlayerName(prompt("Please tell me your name"))}
              className="playerName"
            >
              {playerName}
            </div>
          </div>

          <div className="teste4">
            <div className="reduce">
              <button onClick={() => setLifePoints(lifePoints - 5)}>-5</button>
              <button onClick={reduceLifePoints}>-1</button>
            </div>
            <h1>{lifePoints}</h1>
            <div className="increase">
              <button onClick={() => setLifePoints(lifePoints + 1)}>+1</button>
              <button onClick={() => setLifePoints(lifePoints + 5)}>+5</button>
              <br />
            </div>
          </div>

          <div className="teste2">
            <button onClick={() => setLifePoints(20)}>Reset</button>
          </div>
        </div>
      </div>
    </>
  );
}
