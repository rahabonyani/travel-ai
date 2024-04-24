import { Inter } from "next/font/google";
import "./globals.css";
import { getStaticParams } from "@/src/lib/translate/serverTranslate";
import { I18nProviderClient } from "@/src/lib/translate/clientTranslate";

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
        <I18nProviderClient locale={params.locale}>
          {children}
        </I18nProviderClient>
      </body>
    </html>
  );
}
