import { Flex, Text, Button } from "@chakra-ui/react";
import { NavLink as RouterNavLink } from "react-router-dom";

const NoPermission = () => {
  return (
    <Flex alignItems="center" flexDirection="column" gap="xl">
      <Flex flexDirection="column" gap="md" alignItems="center">
        <Text>
          You do not have permission to create or edit notes. Please log in with the appropriate
          account.
        </Text>

        <RouterNavLink to="/login">
          <Button background="red.100">Login</Button>
        </RouterNavLink>
      </Flex>

      <img src="images/noPermissionIcon.svg" alt="No Result Icon" width="300px" />
    </Flex>
  );
};

export default NoPermission;
