import { useState } from "react";
import { cn } from "../../utils/common.ui.utils";
import Cookies from "js-cookie";

import { useRouter } from "next/router";
import { useAuth } from "../../utils/provider/authContext";
import axios from "axios";
import InputFeild from "../../components/InputFeild/inputField";
import Button from "../../components/Button/Button";
import IconWrapper from "../../components/Authpage/iconwraper";
import AuthWrapper from "../../components/Authpage/authPage";

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
      <AuthWrapper>
        <IconWrapper />
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
      </AuthWrapper>
    </div>
  );
};

export default SigninPage;
