import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Serenity Wellness Spa",
  description: "Luxury spa and wellness center offering massages, facials, aromatherapy, hot stone treatments, and holistic packages.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar bookHref="/booking" items={[
          { label: "Services", href: "/services" },
          { label: "About", href: "/about" },
          { label: "Gallery", href: "/gallery" },
          { label: "Products", href: "/products" },
          { label: "FAQ", href: "/faq" },
          { label: "Contact", href: "/contact" },
        ]} />
        <main>{children}</main>
        <Footer quickLinks={[
          { label: "Services", href: "/services" },
          { label: "Gift Cards", href: "/gift-cards" },
          { label: "Policies", href: "/policies" },
          { label: "Contact", href: "/contact" },
        ]} />
      </body>
    </html>
  );
}
