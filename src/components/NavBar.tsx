import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColoroModeSwitch from "./ColoroModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

// interface Props {
//   onSearch: (searchText: string) => void;
// }

export const NavBar = () => {
  return (
    <HStack>
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      <SearchInput />
      <ColoroModeSwitch />
    </HStack>
  );
};
