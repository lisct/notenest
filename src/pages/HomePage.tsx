import { useState, useEffect } from "react";
import { Box, Heading, Separator } from "@chakra-ui/react";
import PageContainer from "../components/PageContainer/PageContainer";
import Note from "../components/Note/Note";
import NoResult from "../components/NoResult/NoResult";
import compact from "lodash/compact";
import { getLocalStorageItem, Note as NoteType } from "../components/lib/localStorage";

const HomePage = () => {
  const [entries, setEntriesState] = useState<NoteType[]>();

  useEffect(() => {
    const entriesFromStorage = getLocalStorageItem();
    setEntriesState(entriesFromStorage);
  }, []);

  return (
    <PageContainer>
      <Box display="flex" flexDirection="column" gap="3xl">
        <Box display="flex" flexDirection="column" gap="sm">
          <Heading fontWeight="400">Your Notes</Heading>
          <Separator />
        </Box>

        {compact(entries).length > 0 ? (
          <Box display="flex" flexDirection="column" gap="sm">
            {compact(entries).map((note) => (
              <Note title={note.title} date={note.createdTime} />
            ))}
          </Box>
        ) : (
          <NoResult />
        )}
      </Box>
    </PageContainer>
  );
};

export default HomePage;
