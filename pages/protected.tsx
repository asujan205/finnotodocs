import { useAuth } from "../utils/provider/authContext";
import { useRouter } from "next/router";
import SigninPage from "./login";
import { useEffect } from "react";

const ProtectedPage = ({ children }: any) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!isAuthenticated && router.pathname.includes("/dashboard")) {
      router.push("/login");
    }
  }, [isAuthenticated, router.pathname]);

  return children;
};

export default ProtectedPage;
