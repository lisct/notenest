import { FC } from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import { NavLink as RouterNavLink } from "react-router-dom";

type Props = {
  showCta?: boolean;
};

const NoResult: FC<Props> = ({ showCta }) => {
  return (
    <Flex alignItems="center" flexDirection="column">
      <Flex flexDirection="column" gap="md" alignItems="center">
        <Text>You haven't created any notes yet. Begin capturing your ideas today!</Text>

        {showCta && (
          <RouterNavLink to="/details">
            <Button background="red.100">Create Note</Button>
          </RouterNavLink>
        )}
      </Flex>

      <img src="images/noResultIcon.svg" alt="No Result Icon" width="600px" />
    </Flex>
  );
};

export default NoResult;
