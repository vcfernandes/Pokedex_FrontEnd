import { useEffect, useState } from "react";
import "./PokeList.css";
import PokemonCard from "./PokemonCard";

import Bottombar from "./Bottombar";

function PokeList() {
  const [aLLPokemons, setALLPokemons] = useState([]);
  const [load, setLoading] = useState(true)
  let [page, setPage] = useState(0)

  const getALLPokemons = async (pag) => {
    const res = await fetch(
      `http://localhost:3334/pokemon/${pag}`
    );
    const data = await res.json();

    setALLPokemons(data.pokemons)
  };

  const nextPage = async () => {
    setPage(page + 1)
    getALLPokemons(page)
  }

  const prevPage = async () => {
    if(page == 0) return;
    setPage(page - 1)
    getALLPokemons(page)
  }

  useEffect(() => {
    if(load){
      
      getALLPokemons(page);
      setLoading(false)
    }
  }, [load]);

  return (
    <>
      <div className="app-container">
        <div className="pokemon-container">
          <div className="all-container" id="container">
            {aLLPokemons.filter(e => e.sprites != undefined).map((pokemonStats) => 
            {
              return (
                <PokemonCard
                  key={pokemonStats._id}
                  id={pokemonStats.id}
                  image={
                    pokemonStats.sprites[0].other["official-artwork"].front_default
                  }
                  name={pokemonStats.name.replace(/^./, (str) => str.toUpperCase())}
                  type={pokemonStats.types[0].type.name}
                  weight={pokemonStats.weight}
                  height={pokemonStats.height}
                  stats={pokemonStats.stats
                    .map((stat) => stat.base_stat)
                    .slice(0, 3)}
                    statsName={pokemonStats.stats.map((stat)=> stat.stat.name).slice(0,3)}
                />
              )
            } )}
          </div>
        </div>
      </div>
      <Bottombar onClickNext={() => nextPage()} onClickPrev={() => prevPage()}/>
    </>
    
  );
}

export default PokeList;
