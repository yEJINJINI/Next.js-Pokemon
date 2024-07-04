"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

const PokemonList = () => {
  // const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(true);
  // const [isError, setIsError] = useState<string>("");

  const {
    data: pokemons,
    isLoading,
    isError,
  } = useQuery<Pokemon[], Error, Pokemon[]>({
    queryKey: ["pokemons"],
    queryFn: async (): Promise<Pokemon[]> => {
      const response = await fetch("/api/pokemons");
      const pokemons = await response.json();
      // setPokemonData(pokemons);
      return pokemons;
    },
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("/api/pokemons");
  //       setPokemonData(response.data);
  //     } catch (error) {
  //       if (error instanceof Error) {
  //         setIsError(error.message);
  //       } else {
  //         setIsError("An error occurred while fetching data.");
  //       }
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);
  if (isError) {
    <div>Error: {isError}</div>;
  }
  if (isLoading) {
    <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="flex justify-center items-center text-3xl font-semibold m-10 w-60 bg-[#fff]">
        <Image
          src="https://dthezntil550i.cloudfront.net/4w/latest/4w1609281705039430001177247/1280_960/627ac116-726a-44c3-9eea-f0aa9f65cb50.png"
          width={40}
          height={40}
          alt="포켓몬 포켓볼"
        />
        포켓몬 도감
      </h1>
      <div className="flex flex-wrap ">
        {pokemons &&
          pokemons.map((pokemon: Pokemon) => (
            <Link key={pokemon.id} href={`/pokemonDetail/${pokemon.id}`}>
              <div className="flex flex-col justify-center items-center border-8 border-solid rounded-2xl w-44 border-[#699deb] p-5 m-3 bg-[#fff]">
                <Image
                  src={pokemon.sprites.front_default}
                  width={96}
                  height={96}
                  alt={pokemon.name || pokemon.korean_name}
                />

                <p>{pokemon.korean_name}</p>
                <p>도감번호: {pokemon.id}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default PokemonList;
