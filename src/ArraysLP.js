import LifeCounter from "./LifeCounter";
import { /* useEffect, */ useState } from "react";
import Coin from "./Coin/Coin";
import Die from "./Die/Die";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as generateId } from "uuid";

import "./styles.css";

export default function ArraysLP() {
  const [listaPlayers, setListaPlayers] = useState([generateId()]);

  return (
    <div className="rootContainer">
      <ToastContainer
        position="top-right"
        autoClose={3000}
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
              setListaPlayers((prev) => [...prev, generateId()]);

              console.log(listaPlayers.length);
            }}
            className="addPlayers"
          >
            Add players
          </button>
          <button onClick={() => setListaPlayers([])} className="addPlayers">
            Delete all players
          </button>
        </div>
        <div className="draw">
          <Coin />
          <Die />
        </div>
      </div>
      <div className="colunas">
        {listaPlayers.map((id) => (
          <LifeCounter key={id} id={id} setListaPlayers={setListaPlayers} />
        ))}
      </div>
    </div>
  );
}
