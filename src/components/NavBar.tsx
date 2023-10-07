import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColoroModeSwitch from "./ColoroModeSwitch";

export const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <Image src={logo} boxSize="60px" />
      <ColoroModeSwitch />
    </HStack>
  );
};
