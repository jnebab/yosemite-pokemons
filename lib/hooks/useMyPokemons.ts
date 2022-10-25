import { useMemo } from "react";
import { useToast } from "@chakra-ui/react";
import { useMyPokemonsAtom } from "../atoms";
import { Pokemon } from "../types/pokemon";

export default function useMyPokemons(pokemon: Pokemon) {
  const toast = useToast();
  const [myPokemons, setMyPokemons] = useMyPokemonsAtom();
  const handleAddPokemonToList = () => {
    if (myPokemons?.length === 6) {
      toast({
        title: "Team limit reached!",
        description:
          "You already reached the maximum number of pokemons in your team.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    setMyPokemons([...myPokemons, pokemon as Pokemon]);
  };

  const handleRemovePokemonFromList = () => {
    const filteredPokemons = myPokemons.filter(
      (myPokemon) => myPokemon.id !== pokemon?.id
    );
    setMyPokemons(filteredPokemons);
  };

  const isPokemonInList = useMemo(() => {
    return (
      myPokemons.findIndex(
        (myPokemon: Pokemon) => myPokemon?.id === pokemon?.id
      ) !== -1
    );
  }, [myPokemons, pokemon]);

  return {
    isPokemonInList: isPokemonInList,
    removePokemon: handleRemovePokemonFromList,
    addPokemon: handleAddPokemonToList,
  };
}
