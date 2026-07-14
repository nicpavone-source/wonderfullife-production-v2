import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingZoey from "@/components/FloatingZoey";
export const metadata: Metadata = { title: { default: "WonderfulLife.ca", template: "%s | WonderfulLife.ca" }, description: "Live your best life every day with Zoey-led nutrition, recovery, recipes, movement and inspiration." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/>{children}<FloatingZoey/><Footer/></body></html>}
