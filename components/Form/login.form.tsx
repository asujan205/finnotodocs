import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormProps } from "./forms.types";

import InputFeild from "../InputFeild/inputField";
import Button from "../Button/Button";

const schema = z.object({
  username: z.string().email(),
  password: z.string().min(5),
});

type FormValues = z.infer<typeof schema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputFeild
        type="email"
        placeholder="Email address"
        label="Email address *"
        required={true}
        {...register("username")}
      />
      {errors.username && <span>{errors.username.message}</span>}
      <InputFeild
        type="password"
        placeholder="Password"
        label="Password *"
        required={true}
        {...register("password")}
      />
      {errors.password && <span>{errors.password.message}</span>}

      <Button type="submit" apperance="login" loading={false} disabled={false}>
        Log in
      </Button>
    </form>
  );
};

export default LoginForm;
