import { useAuth } from "../utils/provider/authContext";
import { useRouter } from "next/router";
import SigninPage from "./login/login";

export const ProtectedPage = ({ children }: any) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  if (!isAuthenticated && router.pathname.includes("/dashboard")) {
    return <SigninPage />;
  }

  return children;
};
