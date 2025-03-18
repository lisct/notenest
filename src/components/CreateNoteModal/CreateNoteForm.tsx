import { FC } from "react";
import { useForm } from "react-hook-form";
import { Text, Field, Input, Stack, Button, Flex } from "@chakra-ui/react";
import { setLocalStorageItem, Note } from "../lib/localStorage";

type FormValues = {
  title: string;
  content: string;
};

type Props = {
  onClose: () => void;
};

const NoteForm: FC<Props> = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: "onChange",
  });

  const handleCreateNote = (data: FormValues) => {
    const note: Note = {
      id: crypto.randomUUID(),
      title: data.title,
      content: data.content,
      createdTime: new Date().toISOString(),
    };

    setLocalStorageItem(note);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(handleCreateNote)}>
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
            Create
          </Button>
        </Flex>
      </Stack>
    </form>
  );
};

export default NoteForm;
