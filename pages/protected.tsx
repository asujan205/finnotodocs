import { useAuth } from "../utils/provider/authContext";
import { useRouter } from "next/router";

const ProtectedPage = ({ children }: any) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  if (!isAuthenticated && router.pathname.includes("/dashboard")) {
    router.push("/login");
    return null;
  }

  return children;
};

export default ProtectedPage;
