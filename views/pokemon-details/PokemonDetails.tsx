import { useRouter } from "next/router";
import {
  Button,
  Flex,
  Heading,
  Image,
  Progress,
  Show,
  Stack,
  Text,
} from "@chakra-ui/react";
import MotionBox from "../../components/motion/MotionBox";
import Layout from "../../layout";
import { useGetPokemonResult } from "../../lib/atoms";
import useMyPokemons from "../../lib/hooks/useMyPokemons";
import { Pokemon, PokemonStat } from "../../lib/types/pokemon";
import getColorScheme from "../../lib/utils/getProgressColorScheme";
import PokemonCard from "../pokemon-card";

export default function PokemonDetails() {
  const router = useRouter();
  const { id } = router?.query;
  const { data: pokemon } = useGetPokemonResult(id as string);

  const { isPokemonInList, addPokemon, removePokemon } = useMyPokemons(
    pokemon as Pokemon
  );

  return (
    <Layout title="Pokemon" description="Pokemon details page">
      <Flex
        direction={{
          base: "column",
          md: "row",
        }}
        align="center"
        justify="center"
        gap={6}
      >
        <Flex direction="column" align="center" justify="center" gap={6}>
          <PokemonCard pokemon={pokemon as Pokemon} hideExplore />
          <Flex gap="4" justify="center" mb="4">
            {isPokemonInList ? (
              <Button
                colorScheme="red"
                onClick={removePokemon}
                fontSize={{
                  base: "xs",
                  md: "base",
                }}
              >
                Remove from My Pokemons
              </Button>
            ) : (
              <Button
                colorScheme="green"
                onClick={addPokemon}
                fontSize={{
                  base: "xs",
                  md: "base",
                }}
              >
                Add to My Pokemons
              </Button>
            )}
          </Flex>
        </Flex>
        {!!pokemon?.stats && pokemon?.stats?.length > 0 ? (
          <Stack
            spacing={4}
            w={{
              base: "100%",
              md: "50%",
            }}
          >
            {pokemon?.stats.map((pokemonStat: PokemonStat) => (
              <Flex gap="4" align="center">
                <MotionBox
                  minWidth={{
                    base: 120,
                    md: 150,
                  }}
                >
                  <Text
                    textTransform="uppercase"
                    fontWeight={600}
                    fontSize={{
                      base: "xs",
                      md: "base",
                    }}
                  >
                    {pokemonStat.stat.name?.replaceAll("-", " ")}
                  </Text>
                </MotionBox>
                <Show above="md">
                  <MotionBox minWidth={30}>
                    <Text>{pokemonStat.base_stat}</Text>
                  </MotionBox>
                </Show>
                <Progress
                  colorScheme={getColorScheme(pokemonStat.base_stat)}
                  size="md"
                  value={pokemonStat.base_stat}
                  max={150}
                  width="100%"
                  rounded="md"
                />
              </Flex>
            ))}
          </Stack>
        ) : null}
      </Flex>
    </Layout>
  );
}
