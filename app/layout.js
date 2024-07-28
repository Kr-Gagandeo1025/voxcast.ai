import { MuseoModerno } from "next/font/google";
import "./globals.css";
import { ClerkProvider} from "@clerk/nextjs";
import { AudioPlayerProvider } from "@/providers/AudioPlayerContext";
import { DataProvider } from "@/providers/DataContext";

const museo = MuseoModerno({ subsets: ["latin"], display:"swap" });


export const metadata = {
  title: "voxcast.ai",
  description: "The AI Podcast.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <DataProvider>
        <AudioPlayerProvider>
          <html lang="en">
            <body className={museo.className}>
              {children}
              </body>
          </html>
        </AudioPlayerProvider>
      </DataProvider>
    </ClerkProvider>
  );
}
