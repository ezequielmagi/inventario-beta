import {ChevronRightIcon,} from "@chakra-ui/icons";
import {  Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <Stack align="center" height="100%">
      <Text
        bg="blue.600"
        w="100%"
        textAlign={{ base: "start", md: "center" }}
        px="2"
        color="white"
        fontSize={{ base: "15px", md: "20px" }}
      >
        Ciudades
      </Text>
      <Stack py="20px" px="2" gap={3}>
        <Link to={`/`}>
          <Stack direction="row">
            <Text flex={1} fontSize={14}>
              Todos
            </Text>
            <ChevronRightIcon boxSize={6} />
          </Stack>
        </Link>
        <Link size="md" to={`/category/${"taller"}`}>
          <Stack direction="row">
            <Text flex={1} fontSize={14}>
              Taller
            </Text>
            <ChevronRightIcon boxSize={6} />
          </Stack>
        </Link>

        <Link to={`/category/${"rincon-de-los-sauces"}`}>
          <Stack justify="center" direction="row">
            <Text flex={1} fontSize={13}>
              Rincon de los Sauces
            </Text>
            <ChevronRightIcon boxSize={6} />
          </Stack>
        </Link>
        
      </Stack>
    </Stack>
  );
};
