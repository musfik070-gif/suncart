import "./globals.css";
import "animate.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "SunCart",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className="min-h-screen flex flex-col bg-base-100">
        {/* Persistent Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>

        {/* Persistent Footer */}
        <Footer />
      </body>
    </html>
  );
}
