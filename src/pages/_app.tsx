import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../provider/authContext";
import ProtectedPage from "./protected";
import { ThemeProvider } from "../provider/theme.provider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ProtectedPage>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </ProtectedPage>
    </AuthProvider>
  );
}

export default MyApp;
