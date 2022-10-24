import { Flex } from "@chakra-ui/react";
import ThemeToggle from "../ThemeToggle";
import { Heading } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Header() {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      justify="space-between"
      p={10}
      h={"80px"}
      mb={6}
    >
      <Heading>Pokemites</Heading>
      <Flex gap={6}>
        <Flex gap={4} align="center">
          <NextLink href="/">Home</NextLink>
          <NextLink href="/my-pokemons">My Pokemons</NextLink>
        </Flex>
        <ThemeToggle />
      </Flex>
    </Flex>
  );
}
