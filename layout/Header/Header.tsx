import { RefObject, useEffect, useRef, useState } from "react";
import NextLink from "next/link";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Show,
  useDisclosure,
} from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import ThemeToggle from "../ThemeToggle";
import { useRouter } from "next/router";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const menuRef = useRef<RefObject<any>>();

  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [router.asPath]);

  return (
    <Flex
      as="header"
      width="full"
      align="center"
      justify="space-between"
      p={{
        base: 6,
        md: 10,
      }}
      h={"80px"}
      mb={6}
    >
      <Heading>
        {" "}
        <NextLink href="/">Pokemites</NextLink>
      </Heading>
      <Show above="md">
        <Flex gap={6}>
          <NavLinks />
          <ThemeToggle />
        </Flex>
      </Show>
      <Show below="md">
        <Flex gap={6} align="center">
          <ThemeToggle />
          <GiHamburgerMenu onClick={onOpen} />
        </Flex>
      </Show>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={menuRef as RefObject<any>}
        isFullHeight
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody display="grid" height="100%" placeItems="center">
            <NavLinks column />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

function NavLinks({ column }: { column?: boolean }) {
  return (
    <Flex gap={4} align="center" direction={column ? "column" : "row"}>
      <NextLink href="/">Home</NextLink>
      <NextLink href="/my-pokemons">My Pokemons</NextLink>
    </Flex>
  );
}
