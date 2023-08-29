import { useState } from "react";
import { cn } from "../../utils/common.ui.utils";
import Cookies from "js-cookie";

import { useRouter } from "next/router";

import axios from "axios";

const SigninPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const GetCookies = () => {
    const token = Cookies.get("token");
    console.log(token);
  };

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

        router.push("/protected/readme");
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
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            SignIn
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="password"
                    required
                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className={cn(
                      "flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm",
                      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                      "bg-indigo-600 text-white hover:bg-indigo-500 ",
                      "disabled:cursor-not-allowed disabled:bg-indigo-300 disabled:opacity-50"
                    )}
                  >
                    {!isLoading ? "Log in" : "Login in..."}
                  </button>
                  <button
                    className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm"
                    onClick={() => router.push("/")}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SigninPage;
