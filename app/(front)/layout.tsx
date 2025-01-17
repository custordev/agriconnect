import Header from "@/components/(global)/site-header";
import SiteFooter from "../../components/(global)/site-footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
