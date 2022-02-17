import LifeCounter from "./LifeCounter";
import { useState } from "react";
import "./styles.css";

export default function ArraysLP() {
  const arrayCounter = [<LifeCounter />];

  const [listaComponentes, setListaComponentes] = useState([<LifeCounter />]);

  return (
    <div className="rootContainer">
      <button
        onClick={() =>
          setListaComponentes([...listaComponentes, ...arrayCounter])
        }
        className="addPlayers"
      >
        Add players
      </button>
      <button onClick={() => setListaComponentes([])} className="addPlayers">
        Delete all players
      </button>
      {listaComponentes}
    </div>
  );
}

/*Random comment*/
