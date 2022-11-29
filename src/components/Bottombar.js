import "./Bottombar.css"

function Bottombar({onClickNext, onClickPrev}: any) {
  return (
    <div className="bottom">

      <div className="options">
        <div className="cursor" onClick={() => onClickPrev()}>
          Página anterior
        </div>

        <div className="cursor" onClick={() => onClickNext()}>
          Próxima página
        </div>
      </div>

      <div className="options">
        <div className="bottom-btn">
          <p className="bg-circle-white">A</p>
          <p>Ver Detalhes</p>
        </div>
        <div className="bottom-btn">
          <p className="bg-circle-white">X</p>
          <p>Habitat</p>
        </div>
        <div className="bottom-btn">
          <p className="bg-circle-white">Y</p>
          <p>Ordenar</p>
        </div>
        <div className="bottom-btn">
          <p className="bg-circle-white">+</p>
          <p>Ver Evolução</p>
        </div>
        <div className="bottom-btn">
          <p className="bg-circle-white">B</p>
          <p>Voltar</p>
        </div>
      </div>
      
    </div>
  );
}

export default Bottombar