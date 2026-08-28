import CarteRando from './CarteRando'

function ListeRandos({ randos }) {
  return (
    <div className="liste-randos">
      {randos.map((rando, index) => (
        <CarteRando key={rando.nom || index} rando={rando} />
      ))}
    </div>
  )
}

export default ListeRandos