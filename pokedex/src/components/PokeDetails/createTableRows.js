function createData(key, render) {
  return { key, render };
}

export default function createTableRows(pokemonData) {
  const { types, stats, weight, moves } = pokemonData;

  const rows = [
    createData('Type', () => (
      <>
        {types?.length > 0 &&
          types.map((item) => (
            <div key={item?.type?.name}>{item?.type?.name || ''}</div>
          ))}
      </>
    )),
    createData('Attack', () => {
      const param = stats.filter((item) => item?.stat?.name === 'attack');
      return param[0]?.base_stat || '';
    }),
    createData('Defense', () => {
      const param = stats.filter((item) => item?.stat?.name === 'defense');
      return param[0]?.base_stat || '';
    }),
    createData('HP', () => {
      const param = stats.filter((item) => item?.stat?.name === 'hp');
      return param[0]?.base_stat || '';
    }),
    createData('SP Attack', () => {
      const param = stats.filter(
        (item) => item?.stat?.name === 'special-attack'
      );
      return param[0]?.base_stat || '';
    }),
    createData('SP Defense', () => {
      const param = stats.filter(
        (item) => item?.stat?.name === 'special-defense'
      );
      return param[0]?.base_stat || '';
    }),
    createData('Weight', () => {
      return weight || '';
    }),
    createData('Total moves', () => {
      return moves?.length || '';
    }),
  ];

  return rows;
}
