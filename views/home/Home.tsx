import { Flex, Input, Text } from "@chakra-ui/react";
import MotionBox from "../../components/motion/MotionBox";
import Layout from "../../layout";

export default function Home() {
  return (
    <Layout>
      <Flex direction="column">
        <MotionBox maxW="50%" mb={6}>
          <Input placeholder="Search for pokemons and press enter..." />
        </MotionBox>
        <MotionBox>
          <Text fontWeight={"bold"}>List of pokemons here</Text>
        </MotionBox>
      </Flex>
    </Layout>
  );
}
