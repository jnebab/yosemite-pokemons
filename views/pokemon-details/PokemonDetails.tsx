import { Button, Flex, Heading, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import MotionBox from "../../components/motion/MotionBox";
import Layout from "../../layout";
import {
  useGetPokemonResult,
  useMyPokemonsAtom,
  useSearchText,
} from "../../lib/atoms";
import { Pokemon } from "../../lib/types/pokemon";

export default function PokemonDetails() {
  const router = useRouter();
  const { id } = router?.query;
  const [, setPokemonId] = useSearchText();
  const { data: pokemon, isLoading } = useGetPokemonResult();
  const [myPokemons, setMyPokemons] = useMyPokemonsAtom();

  useEffect(() => {
    if (!!id) {
      setPokemonId(id as string);
    }
  }, [id]);

  const handleAddPokemonToList = () => {
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

  const imageUrl = pokemon?.sprites?.other?.["official-artwork"].front_default;
  return (
    <Layout title="Pokemon" description="Pokemon details page">
      <Flex direction="column" align="center" justify="center" gap={6}>
        <MotionBox display="grid" placeItems="center">
          <Image
            src={imageUrl}
            alt={pokemon?.name}
            width={{ base: 300, md: 500 }}
          />
        </MotionBox>
        <MotionBox textTransform="capitalize">
          <Heading>{pokemon?.name}</Heading>
        </MotionBox>
        <Flex gap="4" justify="center">
          {isPokemonInList ? (
            <Button colorScheme="red" onClick={handleRemovePokemonFromList}>
              Remove from My Pokemons
            </Button>
          ) : (
            <Button colorScheme="green" onClick={handleAddPokemonToList}>
              Add to My Pokemons
            </Button>
          )}
        </Flex>
      </Flex>
    </Layout>
  );
}
