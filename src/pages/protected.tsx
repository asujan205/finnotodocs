import { useAuth } from "../provider/authContext";
import { useRouter } from "next/router";
import SigninPage from "./login";

const ProtectedPage = ({ children }: any) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  if (!isAuthenticated && router.pathname.includes("/dashboard")) {
    return <SigninPage />;
  }

  return children;
};

export default ProtectedPage;
