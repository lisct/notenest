import { useRef } from "react";
import { Button, Dialog, Field, Input, Portal, Stack, Heading } from "@chakra-ui/react";

const CreateNoteModal = () => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Dialog.Root initialFocusEl={() => ref.current}>
      <Dialog.Trigger asChild>
        <Button background="red.100">Create Note</Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content padding="2xl">
            <Dialog.Header>
              <Heading size="4xl" fontWeight="400">
                Create Note
              </Heading>
            </Dialog.Header>
            <Dialog.Body pb="xs">
              <Stack gap="md">
                <Field.Root>
                  <Field.Label>Title</Field.Label>
                  <Input ref={ref} placeholder="Title" />
                </Field.Root>
                <Field.Root>
                  <Field.Label>Content</Field.Label>
                  <Input placeholder="Content" />
                </Field.Root>
              </Stack>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button background="red.100">Create</Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default CreateNoteModal;
