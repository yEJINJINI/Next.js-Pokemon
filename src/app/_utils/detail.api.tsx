export const getPokemonDetail = async ({
  params,
}: {
  params: { id: string };
}): Promise<Pokemon> => {
  const id = params.id;
  const response = await fetch(`http://localhost:3000/api/pokemons/${id}`);
  const data = await response.json();

  if (!data) {
    throw new Error("데이터 로딩 실패!");
  }
  //   const id = params.id;
  //   const response = await axios.get(`http://localhost:3000/api/pokemons/${id}`);
  //   const pokemonDetail = response.data;

  return data;
};
