import { getPokemonDetail } from "@/app/_utils/detail.api";
import { Metadata } from "next/types";
import { PropsWithChildren } from "react";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const id = params.id;
  const pokemon = await getPokemonDetail({ params: { id } });
  return {
    title: `${pokemon.id}-${pokemon.korean_name}`,
    description: `${pokemon.korean_name} 세부사항`,
  };
}
function DetailLayout({ children }: PropsWithChildren) {
  return <div>{children}</div>;
}

export default DetailLayout;
