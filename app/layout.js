import { MuseoModerno } from "next/font/google";
import "./globals.css";

const mueso = MuseoModerno({ subsets: ["latin"] });

export const metadata = {
  title: "voxcast.ai",
  description: "The AI Podcast.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mueso.className}>{children}</body>
    </html>
  );
}
