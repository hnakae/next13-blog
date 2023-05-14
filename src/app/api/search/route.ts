import { NextResponse } from "next/server";

import pokemon from "@/pokemon.json";

// fetch from  /api/search?name=bulbasaur to get the data

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");
  const pokemonData = pokemon.filter((p) =>
    p.name.toLowerCase().includes(name?.toLowerCase() ?? "")
  );
  return NextResponse.json(pokemonData.slice(0, 10));
}
