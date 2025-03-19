import { FC } from "react";
import { Pencil, Trash } from "@phosphor-icons/react";
import { Accordion, Box, IconButton } from "@chakra-ui/react";
import { Note } from "../lib/localStorage";
import NoteDetailItem from "./NoteDetailItem";

type Props = {
  notes: Note[];
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
};

const NoteDetails: FC<Props> = ({ notes, onEdit, onDelete }) => {
  const handleOnEdit = (id: string) => {
    onEdit(id);
  };

  const handleOnDelete = (id: string) => {
    onDelete(id);
  };

  return (
    <Accordion.Root multiple>
      {notes.map(({ id, title, content, createdTime }) => (
        <Box display="flex" justifyContent="space-between" gap="xl" key={title}>
          <Box width="100%">
            <NoteDetailItem title={title} content={content} date={createdTime} />
          </Box>
          <Box display="flex" gap="xs">
            <IconButton
              backgroundColor="transparent"
              aria-label="edit"
              onClick={() => handleOnEdit(id)}
            >
              <Pencil weight="fill" color="black.100" />
            </IconButton>
            <IconButton
              data-testid="delete-button"
              aria-label="delete"
              backgroundColor="transparent"
              onClick={() => handleOnDelete(id)}
            >
              <Trash weight="fill" color="black.100" />
            </IconButton>
          </Box>
        </Box>
      ))}
    </Accordion.Root>
  );
};

export default NoteDetails;
