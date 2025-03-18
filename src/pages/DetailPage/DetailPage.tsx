import { useState, useEffect } from "react";
import { Box, Heading, Separator } from "@chakra-ui/react";
import { getLocalStorageItem, setLocalStorageItem, Note } from "../../components/lib/localStorage";
import CreateNoteModal from "../../components/CreateNoteModal/CreateNoteModal";
import PageContainer from "../../components/PageContainer/PageContainer";
import NoResult from "../../components/NoResult/NoResult";
import NoteDetails from "../../components/NoteDetails/NoteDetails";

const DetailPage = () => {
  const [entries, setEntriesState] = useState<Note[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const handleCreateNote = (newNote: Note) => {
    setLocalStorageItem(newNote);
    setEntriesState((prevNotes) => [...prevNotes, newNote]);
  };

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const notes = getLocalStorageItem() || [];
        setEntriesState(notes);
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
          <Box display="flex" justifyContent="space-between" gap="sm">
            <Heading fontWeight="400">Notes Details</Heading>
            <CreateNoteModal onSubmit={handleCreateNote} />
          </Box>
          <Separator />
        </Box>

        {!loading && entries.length === 0 ? (
          <NoResult />
        ) : (
          <Box display="flex" flexDirection="column" gap="sm">
            <NoteDetails notes={entries} />
          </Box>
        )}
      </Box>
    </PageContainer>
  );
};

export default DetailPage;
