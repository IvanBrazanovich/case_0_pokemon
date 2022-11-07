import { useEffect, useState } from "react";

import api from "./api";
import { Pokemon } from "./types";

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [carrito, setCarrito] = useState<Pokemon[]>([]);
  useEffect(() => {
    api.list().then(setPokemons);
  }, []);

  if (pokemons?.length === 0) return <h1> Cargando... </h1>;
  return (
    <>
      <section>
        {pokemons.map((pokemon) => (
          <article key={pokemon.id}>
            <img alt="imagen" className="nes-container" src={pokemon.image} />
            <div>
              <p>
                {pokemon.name}: <span>${pokemon.price} </span>{" "}
              </p>
              <p>{pokemon.description}</p>
            </div>
            <button
              onClick={() => {
                if (carrito?.length === 3) return;
                setCarrito([...carrito, pokemon]);
              }}
              className="nes-btn"
            >
              Agregar
            </button>
          </article>
        ))}
      </section>
      <aside>
        <button className="nes-btn is-primary">{carrito?.length} items</button>
      </aside>
    </>
  );
}

export default App;
