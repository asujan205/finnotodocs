import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../Modules/provider/authContext";
import ProtectedPage from "./protected";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ProtectedPage>
        <Component {...pageProps} />
      </ProtectedPage>
    </AuthProvider>
  );
}

export default MyApp;
