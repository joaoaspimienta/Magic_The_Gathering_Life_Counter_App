import LifeCounter from "./LifeCounter";
import { useState } from "react";
import Coin from "./Coin/Coin";
import Die from "./Die/Die";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./styles.css";

export default function ArraysLP() {
  const [listaComponentes, setListaComponentes] = useState([<LifeCounter />]);

  const arrayCounter = [<LifeCounter />];

  return (
    <div className="rootContainer">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={true}
        draggable
        pauseOnHover={false}
        ToastContainer
        theme="dark"
      />
      <div className="teste3">
        <div className="botoes">
          <button
            onClick={() => {
              setListaComponentes([...listaComponentes, ...arrayCounter]);
              console.log(listaComponentes.length);
            }}
            className="addPlayers"
          >
            Add players
          </button>
          <button
            onClick={() => setListaComponentes([])}
            className="addPlayers"
          >
            Delete all players
          </button>
        </div>
        <div className="draw">
          <Coin />
          <Die />
        </div>
      </div>
      <div className="colunas">{listaComponentes}</div>
    </div>
  );
}
