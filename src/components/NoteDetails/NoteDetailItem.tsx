import { FC } from "react";
import { Accordion, Text, Heading, Box } from "@chakra-ui/react";
import { formattedDate } from "../../utils/date";

type Props = {
  title: string;
  content: string;
  date: string;
};

const NoteDetailItem: FC<Props> = ({ title, content, date }) => {
  return (
    <Box as={Accordion.Item} padding="md" boxShadow="lg" borderRadius="lg" marginBottom="md">
      <Accordion.ItemTrigger>
        <Box width="100%" display="flex" gap="2xs" flexDirection={{ base: "column", sm: "row" }}>
          <Heading fontWeight="400" size="lg" flex="1">
            {title}
          </Heading>
          <Text color="gray.100">{formattedDate(date)}</Text>
        </Box>
        <Accordion.ItemIndicator />
      </Accordion.ItemTrigger>
      <Accordion.ItemContent>
        <Accordion.ItemBody>
          <Text color="#637381" fontSize="14px">
            {content}
          </Text>
        </Accordion.ItemBody>
      </Accordion.ItemContent>
    </Box>
  );
};

export default NoteDetailItem;
