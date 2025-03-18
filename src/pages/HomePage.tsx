import { useState, useEffect } from "react";
import { Box, Heading, Separator } from "@chakra-ui/react";
import PageContainer from "../components/PageContainer/PageContainer";
import Note from "../components/Note/Note";
import NoResult from "../components/NoResult/NoResult";
import compact from "lodash/compact";
import { getLocalStorageItem, Note as NoteType } from "../components/lib/localStorage";

const HomePage = () => {
  const [entries, setEntriesState] = useState<NoteType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const entriesFromStorage = getLocalStorageItem();
        setEntriesState(entriesFromStorage);
      } catch (error) {
        console.error("Error fetching notes from localStorage:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);

  return (
    <PageContainer>
      <Box display="flex" flexDirection="column" gap="3xl">
        <Box display="flex" flexDirection="column" gap="sm">
          <Heading fontWeight="400">Your Notes</Heading>
          <Separator />
        </Box>

        {!loading && compact(entries).length === 0 ? (
          <NoResult showCta />
        ) : (
          <Box display="flex" flexDirection="column" gap="sm">
            {compact(entries).map((note) => (
              <Note key={note.createdTime} title={note.title} date={note.createdTime} />
            ))}
          </Box>
        )}
      </Box>
    </PageContainer>
  );
};

export default HomePage;
