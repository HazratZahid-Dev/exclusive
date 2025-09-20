// app/layout.tsx
import { Geist } from "next/font/google";
import "./globals.css";
import PageWrapper from "./PageWrapper";
import TopNav from "./components/TopNav";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SearchProvider } from "./components/SearchContex";
import { Provider } from "react-redux";
import { store } from "./store";
import { ReduxProvider } from "./ReduxProvider";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: "Exclusive",
  description: "Created by zahid",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.className} suppressHydrationWarning>
      <body className={`antialiased tracking-wide`} suppressHydrationWarning>
         <ReduxProvider>
          <PageWrapper>
            <TopNav />
            <Navbar />
            {children}
            <Footer />
          </PageWrapper>
      </ReduxProvider>
      </body>
    </html>
  );
}
