import { Flex, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      as="footer"
      width="full"
      justifyContent="center"
      align="center"
      h="80px"
    >
      <Text fontSize="sm" color="gray.500">
        &copy; {new Date().getFullYear()} Pokemites.
      </Text>
    </Flex>
  );
}
