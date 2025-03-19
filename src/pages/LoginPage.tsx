import { Box, Heading, Stack } from "@chakra-ui/react";
import PageContainer from "../components/PageContainer/PageContainer";
import LoginForm from "../components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <PageContainer>
      <Box display="flex" flexDirection="column" gap="3xl" maxWidth="420px" margin="auto">
        <Stack gap="lg">
          <Heading>Login</Heading>
          <LoginForm />
        </Stack>
      </Box>
    </PageContainer>
  );
};

export default LoginPage;
