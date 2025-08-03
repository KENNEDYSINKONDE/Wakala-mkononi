import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";




export const metadata: Metadata = {
  title: "Wakala mkononi | APPLICATION",
  description: "Wakala mkononi Web application",
};
 

const font = Poppins({
  weight: ["100", "200", "300","400", "500", "600","700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
   <h1>hello kennedy</h1>
  
        {children}

        
      </body>
    </html>
  );
}
