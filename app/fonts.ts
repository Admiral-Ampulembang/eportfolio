import {
  Montserrat,
  Sawarabi_Gothic,
  Kiwi_Maru,
} from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const sawarabiGothic = Sawarabi_Gothic({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sawarabi",
  display: "swap",
});

export const kiwiMaru = Kiwi_Maru({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-kiwi",
  display: "swap",
});
