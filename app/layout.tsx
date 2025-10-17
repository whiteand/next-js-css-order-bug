import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ children }: { children?: ReactNode }) {
  return (
    <>
      <Link href="/from">Page With Link to Lazy</Link>
      <br />
      <Link href="/to">Page without link to lazy</Link>
      {children}
    </>
  );
}
