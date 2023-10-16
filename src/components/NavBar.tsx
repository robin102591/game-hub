import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColoroModeSwitch from "./ColoroModeSwitch";
import SearchInput from "./SearchInput";

export const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColoroModeSwitch />
    </HStack>
  );
};
