import { FC } from "react";
import { Flex, Heading, Text, Separator } from "@chakra-ui/react";
import { formattedDate } from "../../utils/date";

type Props = {
  title: string;
  date: string;
};

const Note: FC<Props> = ({ title, date }) => {
  return (
    <Flex direction="column" gap="sm">
      <Flex flexDirection={{ base: "column", sm: "row" }} justifyContent="space-between">
        <Heading fontWeight="400" size="lg">
          {title}
        </Heading>
        <Text color="gray.100">{formattedDate(date)}</Text>
      </Flex>
      <Separator />
    </Flex>
  );
};

export default Note;
