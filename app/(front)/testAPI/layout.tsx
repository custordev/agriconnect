import SiteFooter from "@/components/(global)/site-footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
