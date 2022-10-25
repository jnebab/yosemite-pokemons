import { Fragment } from "react";
import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Pokemon, PokemonType } from "../../lib/types/pokemon";
import MotionBox from "../../components/motion/MotionBox";
import { useRouter } from "next/router";

export default function PokemonCard({
  pokemon,
  hideExplore,
}: {
  pokemon: Pokemon;
  hideExplore?: boolean;
}) {
  const router = useRouter();

  const handleNavigateToPokemonDetails = () => {
    router.push(`/pokemon/${pokemon.id}`);
  };

  const imageUrl = pokemon?.sprites?.other?.["official-artwork"].front_default;
  return (
    <MotionBox
      position="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Heading
        fontSize={{
          base: "6rem",
          md: "12rem",
        }}
        zIndex={1}
        position="relative"
        color="gray.300"
        opacity="0.4"
        textAlign="center"
      >
        {`#${pokemon?.id}`}
      </Heading>
      <MotionBox
        position="absolute"
        top="2rem"
        left="0"
        right="0"
        zIndex={10}
        display="grid"
        placeItems="center"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        <Image
          src={imageUrl}
          alt={pokemon?.name}
          width={{ base: 110, md: 200 }}
        />
      </MotionBox>

      <Heading textTransform="capitalize" textAlign="center">
        {pokemon?.name}
      </Heading>
      <Flex gap={4} justify="center" mb="6">
        {pokemon?.types?.length > 0
          ? pokemon.types.map((type: PokemonType, index) => (
              <Fragment key={index}>
                <Text fontWeight={600} textTransform="capitalize">
                  {type.type.name}
                </Text>
                {index !== pokemon.types.length - 1 ? "|" : null}
              </Fragment>
            ))
          : null}
      </Flex>
      {!hideExplore ? (
        <Flex justify="center">
          <Button
            colorScheme="green"
            variant="outline"
            onClick={handleNavigateToPokemonDetails}
          >
            Explore pokemon
          </Button>
        </Flex>
      ) : null}
    </MotionBox>
  );
}
