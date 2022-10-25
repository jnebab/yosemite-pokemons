import { useEffect } from "react";
import { useRouter } from "next/router";
import { Button, Flex, Heading, Image } from "@chakra-ui/react";
import MotionBox from "../../components/motion/MotionBox";
import Layout from "../../layout";
import { useGetPokemonResult, useSearchText } from "../../lib/atoms";
import useMyPokemons from "../../lib/hooks/useMyPokemons";
import { Pokemon } from "../../lib/types/pokemon";

export default function PokemonDetails() {
  const router = useRouter();
  const { id } = router?.query;
  const [, setPokemonId] = useSearchText();
  const { data: pokemon, isLoading } = useGetPokemonResult();

  useEffect(() => {
    if (!!id) {
      setPokemonId(id as string);
    }
  }, [id]);

  const { isPokemonInList, addPokemon, removePokemon } = useMyPokemons(
    pokemon as Pokemon
  );

  const imageUrl = pokemon?.sprites?.other?.["official-artwork"].front_default;
  return (
    <Layout title="Pokemon" description="Pokemon details page">
      <Flex direction="column" align="center" justify="center" gap={6}>
        <MotionBox display="grid" placeItems="center">
          <Image
            src={imageUrl}
            alt={pokemon?.name}
            width={{ base: 300, md: 400 }}
          />
        </MotionBox>
        <MotionBox textTransform="capitalize">
          <Heading>{pokemon?.name}</Heading>
        </MotionBox>
        <Flex gap="4" justify="center">
          {isPokemonInList ? (
            <Button colorScheme="red" onClick={removePokemon}>
              Remove from My Pokemons
            </Button>
          ) : (
            <Button colorScheme="green" onClick={addPokemon}>
              Add to My Pokemons
            </Button>
          )}
        </Flex>
      </Flex>
    </Layout>
  );
}
