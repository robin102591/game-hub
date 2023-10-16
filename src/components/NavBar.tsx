import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColoroModeSwitch from "./ColoroModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

export const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColoroModeSwitch />
    </HStack>
  );
};
