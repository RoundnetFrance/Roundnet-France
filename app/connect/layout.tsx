import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../../styles/globals.css";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../@/components/ui/avatar";

import { Navbar } from "../../components/ui-v2";
import { Settings2, Bell } from "lucide-react";

export const metadata: Metadata = {
  title: "Roundnet France - Fédération française de roundnet",
  description: "Site officiel de la fédération française de roundnet",
  icons: [
    {
      url: "/images/logos/roundnet-france-tp.png",
      sizes: "224x224",
      type: "image/png",
    },
  ],
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const connectMenuElements = [
  {
    label: "Dashboard",
    href: "/connect",
  },
  {
    label: "Adhérents",
    href: "/connect/adherents",
  },
  {
    label: "Tournois",
    href: "/connect/tournois",
  },
  {
    label: "Documents",
    href: "/connect/documents",
  },
];

export default function ConnectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fr-FR' className={inter.className}>
      <body className='text-zinc-800'>
        <header className='border-b-2 border-zinc-200 gap-4 space-y-2 py-2'>
          <div className='px-4 pt-2 flex justify-between'>
            <div className='font-bold uppercase text-lg'>
              RF Connect |{" "}
              <span className='text-indigo-500'>Titans Roundnet</span>
            </div>
            <div className='flex gap-4 items-center'>
              <Settings2 />
              <Bell />
              <Avatar className='min-w-8 min-h-8 w-8 h-8 rounded-full'>
                <AvatarImage src='/images/logos/roundnet-france-tp.png' />
                <AvatarFallback>RF</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <Navbar elements={connectMenuElements} />
        </header>
        <main className='p-4 max-w-[1200px] mx-auto'>{children}</main>
      </body>
    </html>
  );
}
