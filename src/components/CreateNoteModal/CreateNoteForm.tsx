import { FC } from "react";
import { useForm } from "react-hook-form";
import { Text, Field, Input, Stack, Button, Flex } from "@chakra-ui/react";
import { Note } from "../lib/localStorage";
import { v4 as uuid } from "uuid";

type FormValues = {
  title: string;
  content: string;
};

type Props = {
  defaultValue: Note | null;
  onClose: () => void;
  onSubmit: (note: Note) => void;
};

const NoteForm: FC<Props> = ({ defaultValue, onClose, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      ...defaultValue,
    },
  });

  const handleCreateNote = (data: FormValues) => {
    let note: Note;

    if (defaultValue) {
      // Editing: Keep the same id and createdTime, update only title and content
      note = {
        ...defaultValue,
        title: data.title,
        content: data.content,
      };
    } else {
      // Creating new note
      note = {
        id: uuid(),
        title: data.title,
        content: data.content,
        createdTime: new Date().toISOString(),
      };
    }

    onSubmit(note);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(handleCreateNote)} data-testid="create-note-form">
      <Stack gap="md">
        <Field.Root>
          <Field.Label>Title</Field.Label>
          <Input
            {...register("title", {
              required: "Title is required",
              maxLength: {
                value: 50,
                message: "Title cannot be longer than 50 characters",
              },
            })}
            placeholder="Title"
          />
          {errors.title && <Text color="red.100">{errors.title.message}</Text>}
        </Field.Root>
        <Field.Root>
          <Field.Label>Content</Field.Label>
          <Input
            {...register("content", {
              required: "Content is required",
              maxLength: {
                value: 200,
                message: "Content cannot be longer than 200 characters",
              },
            })}
            placeholder="Content"
          />
          {errors.content && <Text color="red.100">{errors.content.message}</Text>}
        </Field.Root>

        <Flex justifyContent="flex-end" gap="xs">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>

          <Button background="red.100" type="submit" disabled={!isValid}>
            {defaultValue ? "Save" : "Create"}
          </Button>
        </Flex>
      </Stack>
    </form>
  );
};

export default NoteForm;
