import "./lifeCounter.css";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LifeCounter(props) {
  const [lifePoints, setLifePoints] = useState(20);
  const [playerName, setPlayerName] = useState("Player name");
  const [invincible, setInvincible] = useState(false);
  const [isAlive, setIsAlive] = useState(true);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    if (!invincible && isAlive === false) {
      playerName === "Player name"
        ? toast(`☠️ Guy who doesn't know how to write his own name is dead!`)
        : toast(`☠️ ${playerName} is dead!`);
    }
  }, [invincible, isAlive, playerName]);

  useEffect(() => {
    if (!invincible && lifePoints <= 0) {
      setIsAlive(false);
      setDisable(true);
    } else {
      console.log("a");
    }
  }, [lifePoints, invincible]);

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
              disabled={disable}
              onClick={() => setInvincible(!invincible)}
            />
            <span>Invincible</span>
          </div>
        </div>

        <div className="botaoContainer">
          <h1
            className="botaoFechar"
            onClick={() => {
              console.log(props.id);
              props.setListaPlayers((prev) =>
                prev.filter((i) => i !== props.id)
              );
            }}
          >
            X
          </h1>
        </div>

        <div
          className={!invincible && isAlive === false ? "testeDead" : "teste"}
        >
          <div className="teste2">
            <div
              onClick={(playerName) =>
                setPlayerName(prompt("Please tell me your name"))
              }
              className="playerName"
            >
              {playerName}
            </div>
          </div>

          <div className="teste4">
            <div className="reduce">
              <button onClick={() => setLifePoints(lifePoints - 5)}>-5</button>
              <button onClick={() => setLifePoints(lifePoints - 1)}>-1</button>
            </div>
            <h1>{lifePoints}</h1>
            <div className="increase">
              <button
                disabled={disable}
                onClick={() => setLifePoints(lifePoints + 1)}
              >
                +1
              </button>
              <button
                disabled={disable}
                onClick={() => setLifePoints(lifePoints + 5)}
              >
                +5
              </button>
              <br />
            </div>
          </div>

          <div className="teste2">
            <button
              onClick={() => {
                setLifePoints(20);
                setIsAlive(true);
                setDisable(false);
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
