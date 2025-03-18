import { FC } from "react";
import { Accordion } from "@chakra-ui/react";
import { Note } from "../lib/localStorage";
import NoteDetailItem from "./NoteDetailItem";

type Props = {
  notes: Note[];
};

const NoteDetails: FC<Props> = ({ notes }) => {
  return (
    <Accordion.Root multiple>
      {notes.map(({ title, content, createdTime }) => (
        <NoteDetailItem title={title} content={content} date={createdTime} />
      ))}
    </Accordion.Root>
  );
};

export default NoteDetails;
