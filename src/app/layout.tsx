import { Inter } from "next/font/google";
import "./globals.css";
import { getStaticParams } from "@/lib/translate/serverTranslate";

export async function generateStaticParams() {
  return getStaticParams();
}

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={params.locale} className={inter.className}>
      <body>
          {children}
      </body>
    </html>
  );
}
