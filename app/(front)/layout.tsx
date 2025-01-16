import Header from "@/components/ui/(global)/site-header";
import SiteFooter from "../../components/ui/(global)/site-footer";

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
