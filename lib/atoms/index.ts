import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useQuery } from "@tanstack/react-query";
import { Pokemon } from "../types/pokemon";

/**
 * Hydration basically means if the app is fully loaded in a client side
 * to avoid some conflict and request duplication
 */
const hydratedAtom = atom<boolean>(false);

const useHydratedAtom = () => useAtom(hydratedAtom);

/**
 * myPokemons atom hold user's own pokemon list and it uses "atomWithStorage" function
 * because the data need to be saved and synced with locale storage.
 */
const myPokemonsAtom = atomWithStorage<Pokemon[]>("my-pokemons", []);

const useMyPokemonsAtom = () => useAtom(myPokemonsAtom);

/**
 * searchText atom holds the input text from search input
 */
const searchText = atom<string>("1");

/**
 * updateSearchText atom holds the setter and getter function for searchText state
 */
const updateSearchText = atom(
  (get) => get(searchText),
  (_, set, newText: string) => {
    set(searchText, newText);
  }
);

/**
 * useSearchText is a custom hook to retrieve the updateSearchText atom
 */
const useSearchText = () => useAtom(updateSearchText);

/**
 * useGetPokemonResult is a custom atom that will make the request to poke api and retrieve the expected result
 */
const useGetPokemonResult = () => {
  const [searchText] = useSearchText();
  return useQuery(
    ["useGetPokemonResult", searchText],
    async () => {
      const result = await fetch(`/api/v2/pokemon/${searchText}`);
      const data = await result.json();
      return data as Pokemon;
    },
    {
      retry: false,
      onError: (error: any) => {
        console.log("useGetPokemonResult error", error);
      },
    }
  );
};

export {
  myPokemonsAtom,
  useHydratedAtom,
  useSearchText,
  useGetPokemonResult,
  useMyPokemonsAtom,
};
