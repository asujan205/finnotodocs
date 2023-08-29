import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import Cookies from "js-cookie";
import { validateAccessToken } from "../../auth";

// Define the type for the context value
type AuthContextType = {
  isAuthenticated: boolean;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const validateToken = async () => {
    const token = Cookies.get("token");
    if (token) {
      const isToken = await validateAccessToken(token);
      if (isToken) {
        setIsAuthenticated(true);
      }
    }
  };

  useEffect(() => {
    validateToken();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
