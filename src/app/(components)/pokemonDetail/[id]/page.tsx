import { getPokemonDetail } from "@/app/_utils/detail.api";
import Image from "next/image";

// api 데이터를 가져오기
const PokemonDetail = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const pokemon = await getPokemonDetail({ params });
  // const paddedId = pokemon.id.toString().padStart(4, "0");

  return (
    <div className="flex flex-col w-2/4 h-auto mt-7 mb-7 ml-auto mr-auto">
      <div className="bg-[#e0e0e0] text-center p-5">
        <h1 className="text-2xl font-semibold mb-2">{pokemon.korean_name}</h1>
        <p>No. {id.padStart(4, "0")}</p>
      </div>

      <div className="flex flex-col w-auto justify-center items-center content-around">
        <Image
          src={pokemon.sprites.front_default}
          width={150}
          height={150}
          alt={pokemon.name || pokemon.korean_name}
        />

        <h2 className="text-2xl mb-2">이름: {pokemon.korean_name}</h2>
        <p className="mb-2 text-lg">
          키: {pokemon.height / 10}m 무게: {pokemon.weight / 10}kg
        </p>
        <p className="mb-4 text-xl font-medium">
          타입:
          {pokemon.types.map((t) => (
            <span
              key={id}
              className="ml-1 mr-1 p-1 rounded-lg text-white bg-[#f7aa46]"
            >
              {t.type.korean_name}
            </span>
          ))}
          특성:
          {pokemon.abilities.map((a) => (
            <span
              key={id}
              className="ml-1 mr-1 p-1 rounded-lg text-white bg-[#58d427]"
            >
              {a.ability.korean_name}
            </span>
          ))}
        </p>

        <div className="flex flex-col text-center">
          <div>
            <h2 className="text-2xl font-medium p-3">기술</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center">
            {pokemon.moves.map((m) => (
              <p
                key={id}
                className="ml-2 text-xl p-3 border border-solid rounded-lg"
              >
                {m.move.korean_name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
