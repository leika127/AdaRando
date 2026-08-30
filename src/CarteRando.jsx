import EtiquetteDifficulte from './EtiquetteDifficulte'
function CarteRando({ rando }) {
  return (
    <div className="carte-rando">
      <h2>{rando.nom}</h2>
      <p>Difficulté : <EtiquetteDifficulte difficulte={rando.difficulte} /></p>
      <p>Durée : {rando.duree_h}h</p>
      <p>Dénivelé : {rando.denivele_m}m</p>
      {rando.balisee && <p className="badge">📍 Balisée</p>}
    </div>
  )
}

export default CarteRando 