import { Button, Flex, Input } from "@chakra-ui/react";
import random from "lodash/random";
import React, { useState } from "react";
import MotionBox from "../../components/motion/MotionBox";
import Layout from "../../layout";
import { useGetPokemonResult, useSearchText } from "../../lib/atoms";
import PokemonCard from "../pokemon-card/PokemonCard";

export default function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [, setSearchText] = useSearchText();
  const { data: pokemon, isLoading } = useGetPokemonResult();

  const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchText(searchInput);
    }
  };

  const handleRandomPokemonId = () => {
    const randomId = random(0, 905);
    setSearchText(randomId.toString());
  };

  return (
    <Layout title="Home" description="Homepage of pokemites">
      <Flex direction="column" justify="center" align="center">
        <MotionBox
          w={{
            base: "100%",
            md: "50%",
          }}
          mb={4}
        >
          <Input
            placeholder="Type a name of a pokemon then press enter..."
            value={searchInput}
            onChange={handleSearchTextChange}
            onKeyDown={handleOnEnter}
          />
        </MotionBox>
        <MotionBox mb={10}>
          <Button colorScheme="blue" onClick={handleRandomPokemonId}>
            Find a random pokemon
          </Button>
        </MotionBox>
        <MotionBox>
          {!isLoading && !!pokemon ? <PokemonCard pokemon={pokemon} /> : null}
        </MotionBox>
      </Flex>
    </Layout>
  );
}
