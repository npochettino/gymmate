import "./globals.css";
import { AuthProvider } from "./context/AuthContext";
import type { Metadata } from "next";
import { ThemeProvider } from "./context/ThemeContext";

export const metadata: Metadata = {
  title: "GymMate",
  description: "Gym management made simple",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}