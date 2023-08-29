import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import Cookies from "js-cookie";
import { validateAccessToken } from "../../auth";

export const AuthContext = createContext({});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const ValidateToken = async () => {
    const token = Cookies.get("token");
    if (token) {
      const isToken = await validateAccessToken(token);
      if (isToken) {
        setIsAuthenticated(true);
      }
    }
  };

  useEffect(() => {
    ValidateToken();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
