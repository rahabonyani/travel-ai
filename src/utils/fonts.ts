import { Poppins } from "next/font/google";

export const poppins_init = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

export const poppins = poppins_init.variable;
