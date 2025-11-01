// app/layout.tsx
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";
import Layout from "@/components/Layout";

export const metadata = { title: "Product Dashboard" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Layout>{children}</Layout>
        </AuthProvider>
      </body>
    </html>
  );
}
