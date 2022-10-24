import { useMemo } from "react";
import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useMyPokemonsAtom } from "../../lib/atoms";
import { Pokemon, PokemonType } from "../../lib/types/pokemon";
import MotionBox from "../../components/motion/MotionBox";
import { useRouter } from "next/router";

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  const router = useRouter();

  const handleNavigateToPokemonDetails = () => {
    router.push(`/pokemon/${pokemon.id}`);
  };

  const imageUrl = pokemon?.sprites?.other?.["official-artwork"].front_default;
  return (
    <MotionBox position="relative">
      <Heading
        fontSize={{
          base: "8rem",
          md: "12rem",
        }}
        zIndex={1}
        position="relative"
        color="gray.300"
        opacity="0.4"
      >
        {`#${pokemon.id}`}
      </Heading>
      <MotionBox
        position="absolute"
        top="2rem"
        left="0"
        right="0"
        zIndex={10}
        display="grid"
        placeItems="center"
      >
        <Image
          src={imageUrl}
          alt={pokemon.name}
          width={{ base: 140, md: 200 }}
        />
      </MotionBox>

      <Heading textTransform="capitalize" textAlign="center">
        {pokemon.name}
      </Heading>
      <Flex gap={4} justify="center" mb="6">
        {pokemon?.types?.length > 0
          ? pokemon.types.map((type: PokemonType, index) => (
              <>
                <Text fontWeight={600} textTransform="capitalize">
                  {type.type.name}
                </Text>
                {index !== pokemon.types.length - 1 ? "|" : null}
              </>
            ))
          : null}
      </Flex>
      <Flex justify="center">
        <Button
          colorScheme="green"
          variant="outline"
          onClick={handleNavigateToPokemonDetails}
        >
          Explore pokemon
        </Button>
      </Flex>
    </MotionBox>
  );
}
