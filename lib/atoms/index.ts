import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

/**
 * Hydration basically means if the app is fully loaded in a client side to avoid some conflict and request dublication
 */
const hydratedAtom = atom<boolean>(false);

/**
 * myPokemons atom hold user's own pokemon list and it uses "atomWithStorage" function because the data need to be
 * saved and synced with locale storage.
 */
const myPokemonsAtom = atomWithStorage("my-pokemons", []);

export { myPokemonsAtom, hydratedAtom };
