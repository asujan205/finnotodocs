import { useState } from "react";
import { cn } from "../../utils/common.ui.utils";
import Cookies from "js-cookie";

import { useRouter } from "next/router";
import { useAuth } from "../../utils/provider/authContext";
import axios from "axios";
import InputFeild from "../../components/InputFeild/inputField";
import Button from "../../components/Button/Button";

const SigninPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setIsAuthenticated } = useAuth();
  const router = useRouter();
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
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
    <div className="bg-white w-screen h-screen">
      <div className="flex flex-col mx-auto items-center justify-between min-h-[500px] max-w-[500px] shadow-md rounded-sm py-12 my-auto sm:w-full">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="/logo-1.png"
            alt="logo"
            onClick={() => router.push("/")}
          />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign In
          </h2>
          <p className="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
            Enter yours credentials to access your account
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <form className="space-y-6">
            <div>
              <InputFeild
                type="email"
                name="email"
                placeholder="Email address"
                value={username}
                onChange={(e) => setEmail(e.target.value)}
                required
                label="Email address *"
              />
            </div>
            <div>
              <InputFeild
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                label="Password *"
              />
              <div className="mt-6">
                <Button
                  type="submit"
                  apperance="login"
                  onClick={handleSubmit}
                  loading={isLoading}
                  disabled={isLoading}
                >
                  {!isLoading ? "Log in" : "Login in..."}
                </Button>

                <Button
                  type="button"
                  apperance="cancel"
                  onClick={() => router.push("/")}
                  className="mt-6 text-black"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
