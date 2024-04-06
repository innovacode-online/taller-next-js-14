import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Providers } from "@/modules/shared/providers/Providers";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next POS",
  description: "El mejor sistema de Punto de venta",
};

export default function RootLayout({children }: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="es">
      <body className={nunito.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
