// src/app/layout.tsx
import "../../styles/globals.css";
import "../../styles/buttons.css";
import "../../styles/forms.css";
import "../../styles/navbar.css";
import "../../styles/hero.css";
import "../../styles/footer.css";
import "../../styles/auth.css";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata = {
  title: "ScenARy",
  description: "Augmented Reality Historical Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
