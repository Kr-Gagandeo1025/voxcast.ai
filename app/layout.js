import { MuseoModerno } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const museo = MuseoModerno({ subsets: ["latin"], display:"swap" });

export const metadata = {
  title: "voxcast.ai",
  description: "The AI Podcast.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={museo.className}>
          {children}
          </body>
      </html>
    </ClerkProvider>
  );
}
