
import { Montserrat, Courier_Prime, DM_Serif_Text } from "next/font/google";

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: "400"
});

export const courier_prime = Courier_Prime({
  variable: "--font-courier-prime",
  subsets: ["latin"],
  weight: "400"
});

export const dm_serif = DM_Serif_Text({
  variable: "--font-dm-serif-text",
  subsets: ["latin"],
  weight: "400"
});