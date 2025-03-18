import { Box, Heading, Separator } from "@chakra-ui/react";
import PageContainer from "../components/PageContainer/PageContainer";
import CreateNoteModal from "../components/CreateNoteModal/CreateNoteModal";

const DetailPage = () => {
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
      </Box>
    </PageContainer>
  );
};

export default DetailPage;
