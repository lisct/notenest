import { useState, useEffect } from "react";
import { Box, Heading, Separator } from "@chakra-ui/react";
import {
  getLocalStorageItem,
  setLocalStorageItem,
  removeLocalStorageItem,
  updateLocalStorageItem,
  Note,
} from "../../components/lib/localStorage";
import CreateNoteModal from "../../components/CreateNoteModal/CreateNoteModal";
import PageContainer from "../../components/PageContainer/PageContainer";
import NoResult from "../../components/NoResult/NoResult";
import NoteDetails from "../../components/NoteDetails/NoteDetails";

const DetailPage = () => {
  const [entries, setEntriesState] = useState<Note[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  const handleCreateNote = (newNote: Note) => {
    if (selectedNote) {
      updateLocalStorageItem(newNote);

      setEntriesState((prevNotes) =>
        prevNotes.map((note) => (note.id === newNote.id ? { ...note, ...newNote } : note))
      );
    } else {
      setLocalStorageItem(newNote);
      setEntriesState((prevNotes) => [...prevNotes, newNote]);
    }
  };

  const handleOnCloseModal = () => {
    setSelectedNote(null);
    setIsOpenCreateModal(false);
  };

  const handleOnOpenModal = () => {
    setSelectedNote(null);
    setIsOpenCreateModal(true);
  };

  const handleOnEditNote = (id: string) => {
    const note = entries.find((note) => note.id === id) || null;
    setSelectedNote(note);
    setIsOpenCreateModal(true);
  };

  const handleOnDeleteNote = (id: string) => {
    const updatedNotes = entries.filter((note) => note.id !== id);
    removeLocalStorageItem(id);
    setEntriesState(updatedNotes);
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
            <CreateNoteModal
              note={selectedNote}
              isOpen={isOpenCreateModal}
              onSubmit={handleCreateNote}
              onOpen={handleOnOpenModal}
              onClose={handleOnCloseModal}
            />
          </Box>
          <Separator />
        </Box>

        {!loading && entries.length === 0 ? (
          <NoResult />
        ) : (
          <Box display="flex" flexDirection="column" gap="sm">
            <NoteDetails notes={entries} onEdit={handleOnEditNote} onDelete={handleOnDeleteNote} />
          </Box>
        )}
      </Box>
    </PageContainer>
  );
};

export default DetailPage;
