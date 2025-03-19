import { FC } from "react";

import { Button, Dialog, Portal, Heading, Box } from "@chakra-ui/react";
import CreateNoteForm from "./CreateNoteForm";
import { Note } from "../lib/localStorage";

type Prop = {
  isOpen: boolean;
  note: Note | null;
  onOpen: () => void;
  onClose: () => void;
  onSubmit: (note: Note) => void;
};
const CreateNoteModal: FC<Prop> = ({ onSubmit, isOpen, onOpen, onClose, note }) => {
  const handleSubmit = (note: Note) => {
    onSubmit(note);
  };

  return (
    <Dialog.Root open={isOpen}>
      <Button background="red.100" onClick={onOpen}>
        Create Note
      </Button>

      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Box as={Dialog.Content} padding="2xl">
            <Dialog.Header>
              <Heading size="4xl" fontWeight="400">
                {note ? "Edit Note" : "Create Note"}
              </Heading>
            </Dialog.Header>
            <Dialog.Body pb="xs">
              <CreateNoteForm onClose={onClose} onSubmit={handleSubmit} defaultValue={note} />
            </Dialog.Body>
          </Box>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default CreateNoteModal;
