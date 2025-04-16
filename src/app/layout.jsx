import { Poppins } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Adaptive Nexus Technologies",
  description:
    "Innovative solutions driving digital transformation and empowering businesses worldwide.",
  keywords: [
    "Adaptive Nexus",
    "AI Solutions",
    "Data Analytics",
    "LLM",
    "NLP",
    "Digital Transformation",
    "Business Intelligence",
    "Automation",
    "Data Security",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.className} antialiased bg-background text-foreground duration-300 transition-colors`}
      >
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
