import { Features } from "@/components/(front)/category/features";
import { PromotionalCards } from "@/components/(front)/category/promotionalCars";
import { WeeklyBestSelling } from "@/components/(front)/category/weeklyBestSelling";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function CategoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      <div className="flex items-center gap-8 ">
        <Breadcrumb items={[{ label: "Home", href: "/" }]} />
        <h1 className="text-4xl font-bold">All Categories</h1>
      </div>
      <WeeklyBestSelling />
      <PromotionalCards />
      <Features />
    </div>
  );
}
