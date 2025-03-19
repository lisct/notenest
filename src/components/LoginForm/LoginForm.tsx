import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Text, Field, Input, Stack, Button, Flex } from "@chakra-ui/react";
import { setLoginData } from "../lib/loginStorage";

type FormValues = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: "onChange",
  });

  const handleCreateNote = (data: FormValues) => {
    setLoginData(data);
    navigate("/details");
  };

  return (
    <form onSubmit={handleSubmit(handleCreateNote)} data-testid="create-note-form">
      <Stack gap="md">
        <Field.Root>
          <Field.Label>Username</Field.Label>
          <Input
            {...register("username", {
              required: "Username is required",
            })}
            placeholder="Username"
          />
          {errors.username && <Text color="red.100">{errors.username.message}</Text>}
        </Field.Root>
        <Field.Root>
          <Field.Label>Password</Field.Label>
          <Input
            {...register("password", {
              required: "Password is required",
            })}
            placeholder="Password"
            type="password"
          />
          {errors.password && <Text color="red.100">{errors.password.message}</Text>}
        </Field.Root>

        <Flex justifyContent="flex-end" gap="xs">
          <RouterNavLink to="/">
            <Button variant="outline">Cancel</Button>
          </RouterNavLink>

          <Button background="red.100" type="submit" disabled={!isValid}>
            Continue
          </Button>
        </Flex>
      </Stack>
    </form>
  );
};

export default LoginForm;
