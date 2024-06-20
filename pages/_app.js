// pages/_app.js
import { SessionProvider } from "next-auth/react";
import { GlobalProvider } from '../context/GlobalContext';
import '../assets/styles/globals.css'; // Pastikan path ini benar sesuai dengan struktur proyek Anda

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </SessionProvider>
  );
}

export default MyApp;
