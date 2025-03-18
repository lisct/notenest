import { useState, FC } from "react";

import { Button, Dialog, Portal, Heading, Box } from "@chakra-ui/react";
import CreateNoteForm from "./CreateNoteForm";
import { Note } from "../lib/localStorage";

type Prop = {
  onSubmit: (note: Note) => void;
};
const CreateNoteModal: FC<Prop> = ({ onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClose = () => {
    setIsOpen(false);
  };

  const handleOnOpen = () => {
    setIsOpen(true);
  };
  const handleSubmit = (note: Note) => {
    onSubmit(note);
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleOnOpen}>
      <Button background="red.100" onClick={handleOnOpen}>
        Create Note
      </Button>

      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Box as={Dialog.Content} padding="2xl">
            <Dialog.Header>
              <Heading size="4xl" fontWeight="400">
                Create Note
              </Heading>
            </Dialog.Header>
            <Dialog.Body pb="xs">
              <CreateNoteForm onClose={handleOnClose} onSubmit={handleSubmit} />
            </Dialog.Body>
          </Box>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default CreateNoteModal;
