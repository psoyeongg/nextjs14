import { Metadata } from "next";
import Navigation from "../components/navigation";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Next Movies",
  },
  description: "The best movies on the best framework",
};

/*
  재사용하는 요소들을 둘 수 있는 레이아웃 시스템
*/
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
