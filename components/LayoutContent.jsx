"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import FloatingContacts from "./FloatingContacts";

const publicPages = ["/", "/catalog", "/packages", "/services", "/portfolio"];

export default function LayoutContent({ children }) {
  const pathname = usePathname();

  const showFloatingContacts = publicPages.includes(pathname);

  return (
    <>
      <Header>{children}</Header>

      {showFloatingContacts && <FloatingContacts />}
    </>
  );
}
