import { Pokemon } from "@/types";

const PokemonTable = ({ pokemons }: { pokemons: Pokemon[] }) => {
  return (
    <table className=" w-[292px]">
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody className="text-center">
        {pokemons.map((pokemon) => (
          <tr key={pokemon.name}>
            <td>{pokemon.name}</td>
            {/* <td>{pokemon.im}</td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;
