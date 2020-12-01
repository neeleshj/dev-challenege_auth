import { useColorMode, Button, Icon } from "@chakra-ui/react";
import React from "react";
import { MdBrightness3, MdBrightness5 } from "react-icons/md";

function DarkModeSwtich() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button variant="ghost" onClick={toggleColorMode}>
      {colorMode === "light" ? (
        <Icon as={MdBrightness3} />
      ) : (
        <Icon as={MdBrightness5} />
      )}
    </Button>
  );
}

export default DarkModeSwtich;
