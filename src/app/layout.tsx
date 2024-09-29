import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rachel Evans — CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
