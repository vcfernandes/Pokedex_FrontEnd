import React, { useState } from "react";
import "./PokemonCard.css";
import pokebola2 from "../images/pokebola2.png";
import Modal from "./Modal";

function PokemonCard({
  id,
  name,
  image,
  type,
  weight,
  height,
  stats,
  statsName,
}) {
    
  const [isShown, setIsShown] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function modalHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <div className="container">
      {isShown && (
      <div className="show">
        <div className="stat-container-title">
          <img src={image} alt={name} className="image-title" />
          <p style={{ width: " 180px", color: "black" }}>No. {id}</p>
          <p>{name}</p>
          <img src={pokebola2} alt="pokebola" className="pokebola-title" />
        </div>
        <img src={image} alt={name} />
        <div style={{ display: "flex", width: "100%" }}>
          <div
            style={{ background: "#dbdbd9", textAlign: "center" }}
            className="stats-left"
          >
            <p>Tipo</p>
            <p>Altura</p>
            <p>Peso</p>
          </div>
          <div style={{ background: "#ffffff" }} className="stats-right">
            <p>{type}</p>
            <p>{height}0 cm</p>
            <p>{weight} lbs</p>
          </div>
        </div>
        <div className="base-stats">
          <div>
            {statsName.map((stats) => (
              <p className="stats">{stats}</p>
            ))}
          </div>
          <div>
            {stats.map((stats) => (
              <p className="stats">{stats}</p>
            ))}
          </div>
        </div>
      </div>
      )}
      <div className="right"
       onMouseEnter={() => setIsShown(true)}
       onMouseLeave={() => setIsShown(false)}
       onClick={modalHandler}
       >
        <img src={image} alt={name} style={{maxHeight:"50px", marginRight:"10px", width:"50px"}} />
        <p style={{width:"270px"}}>No. {id}</p>
        <p>{name}</p>
        <img src={pokebola2} alt="pokebola" style={{marginLeft:"auto", width:"40px"}}></img>
      </div>
      {modalIsOpen && (
        <Modal key={id} id={id}
        name={name}
        image={image}
        height={height}
        weight={weight}
        stats={stats}
        statsName={statsName}
        type={type}
        onClick={closeModalHandler}
        />        
      )}
    </div>
  );
}

export default PokemonCard;
