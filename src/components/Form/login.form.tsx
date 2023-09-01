import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import InputFeild from "../InputFeild/inputField";
import Button from "../Button/Button";
import { useRouter } from "next/router";
import { useAuth } from "../../provider/authContext";
import axios from "axios";
import Cookies from "js-cookie";

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

  const [isLoading, setIsLoading] = useState(false);
  const { setIsAuthenticated } = useAuth();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const { username, password } = data;

    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://meta.finnoto.dev/auth/login",
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        Cookies.set("token", response.data.user.access_token);

        router.push("/");
        setIsAuthenticated(true);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

      <Button
        type="button"
        apperance="cancel"
        loading={false}
        disabled={false}
        onClick={() => router.push("/")}
        className="mt-2 text-black"
      >
        Cancel
      </Button>
    </form>
  );
};

export default LoginForm;
