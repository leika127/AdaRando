function EtiquetteDifficulte({ difficulte }) {
  const getDifficulteColor = (diff) => {
    switch (diff) {
      case 'Facile':
        return 'green';
      case 'Moyenne':
        return 'orange';
      case 'Difficile':
        return 'red';
      default:
        return 'gray';
    }
  };

  return (
    <span style={{ backgroundColor: getDifficulteColor(difficulte) }}>
      {difficulte}
    </span>
  );
}

export default EtiquetteDifficulte;