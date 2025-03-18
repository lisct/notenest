import { useState, useEffect } from "react";
import compact from "lodash/compact";
import { Box, Heading, Separator } from "@chakra-ui/react";
import { getLocalStorageItem, Note as NoteType } from "../components/lib/localStorage";
import CreateNoteModal from "../components/CreateNoteModal/CreateNoteModal";
import PageContainer from "../components/PageContainer/PageContainer";
import NoResult from "../components/NoResult/NoResult";
import NoteDetails from "../components/NoteDetails/NoteDetails";

const DetailPage = () => {
  const [entries, setEntriesState] = useState<NoteType[]>();

  useEffect(() => {
    setEntriesState(getLocalStorageItem());
  }, []);

  return (
    <PageContainer>
      <Box display="flex" flexDirection="column" gap="3xl">
        <Box display="flex" flexDirection="column" gap="sm">
          <Box display="flex" justifyContent="space-between" gap="sm">
            <Heading fontWeight="400">Notes Details</Heading>
            <CreateNoteModal />
          </Box>
          <Separator />
        </Box>

        {compact(entries).length > 0 ? (
          <Box display="flex" flexDirection="column" gap="sm">
            {entries && <NoteDetails notes={entries} />}
          </Box>
        ) : (
          <NoResult />
        )}
      </Box>
    </PageContainer>
  );
};

export default DetailPage;
