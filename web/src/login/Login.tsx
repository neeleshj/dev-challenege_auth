import { Box, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import DarkModeSwtich from "../common/components/darkModeSwitch";
import DevChallengesLogo from "../common/components/devChallengesLogo";

function Login() {
  return (
    <Flex minH="100vh" width="100%" justify="center" align="center">
      <Box
        maxW="473px"
        w="100%"
        borderWidth="1px"
        borderColor="borderGrey"
        borderRadius="24px"
        px="58px"
        pt="48px"
        pb="43px"
      >
        <Flex align="center">
          <DevChallengesLogo />
          <Spacer />
          <DarkModeSwtich />
        </Flex>
      </Box>
    </Flex>
  );
}

export default Login;
