import { Navbar } from "@/components/ui/(dashboard)/dashboard/Navbar";
import { Sidebar } from "@/components/ui/(dashboard)/dashboard/Sidebar";
import SiteFooter from "@/components/ui/(global)/site-footer";
import { authOptions } from "@/config/auth";
import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (!session) {
    redirect("/login");
  }
  return (
    <div className="min-h-screen bg-amber-50">
      <Sidebar />
      <div className="md:ml-64">
        <main>
          <Navbar />
          {children}
          <SiteFooter />
        </main>
      </div>
    </div>
  );
}
