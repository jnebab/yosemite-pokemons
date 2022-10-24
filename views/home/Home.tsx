import { Flex, Input, Text } from "@chakra-ui/react";
import MotionBox from "../../components/motion/MotionBox";
import Layout from "../../layout";

export default function Home() {
  return (
    <Layout title="Home" description="Homepage of pokemites">
      <Flex direction="column" justify="center" align="center">
        <MotionBox
          w={{
            base: "100%",
            md: "50%",
          }}
          mb={6}
        >
          <Input placeholder="Type a name of a pokemon then press enter..." />
        </MotionBox>
        <MotionBox>
          <Text fontWeight={"bold"}>List of pokemons here</Text>
        </MotionBox>
      </Flex>
    </Layout>
  );
}
