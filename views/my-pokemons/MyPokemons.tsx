import { Button, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import MotionBox from "../../components/motion/MotionBox";
import Layout from "../../layout";
import { useHydratedAtom, useMyPokemonsAtom } from "../../lib/atoms";
import useMyPokemons from "../../lib/hooks/useMyPokemons";
import { Pokemon } from "../../lib/types/pokemon";
import PokemonCard from "../pokemon-card";

export default function MyPokemons() {
  const [hasMounted, setHasMounted] = useHydratedAtom();
  const [myPokemons] = useMyPokemonsAtom();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <Layout
      title="My Pokemons"
      description="A list of pokemons added by the user"
    >
      <Flex direction="column">
        <MotionBox mb="6">
          <Heading>My Pokemons</Heading>
        </MotionBox>
        <MotionBox>
          {/* {isLoading ? <SkeletonCircle size="50" /> : null} */}
          {myPokemons?.length === 0 ? (
            <Text>You don't have any pokemons in your list yet.</Text>
          ) : null}
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
            }}
            gap={6}
          >
            {myPokemons?.length > 0
              ? myPokemons.map((myPokemon: Pokemon) => (
                  <MyPokemonCard pokemon={myPokemon} />
                ))
              : null}
          </Grid>
        </MotionBox>
      </Flex>
    </Layout>
  );
}

function MyPokemonCard({ pokemon }: { pokemon: Pokemon }) {
  const { removePokemon } = useMyPokemons(pokemon as Pokemon);
  return (
    <MotionBox
      key={pokemon.id}
      rounded="md"
      p="6"
      bg={{
        dark: "whiteAlpha.100",
        light: "blackAlpha.200",
      }}
      shadow="md"
      my="2"
    >
      <PokemonCard pokemon={pokemon} />
      <Flex justify="center" mt="2">
        <Button colorScheme="red" onClick={removePokemon}>
          Remove from list
        </Button>
      </Flex>
    </MotionBox>
  );
}
