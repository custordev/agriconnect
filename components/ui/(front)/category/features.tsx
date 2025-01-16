import { Card, CardContent } from "@/components/ui/card";
import { Gift, CreditCard,  ShoppingBag } from "lucide-react";

const features = [
  {
    icon: <Gift className="h-8 w-8" />,
    title: "Gromuse Gift vouchers",
    description: "Get discount vouchers for your purchases",
  },
  {
    icon: <Gift className="h-8 w-8" />,
    title: "Present a Gift card",
    description: "Give the perfect gift with our gift cards",
  },
  {
    icon: <CreditCard className="h-8 w-8" />,
    title: "Pay your tabby invoice",
    description: "Easy payment options for your convenience",
  },
  {
    icon: <ShoppingBag className="h-8 w-8" />,
    title: "Order and Collect",
    description: "Pick up your order at your convenience",
  },
];

export function Features() {
  return (
    <section className="relative py-16">
      <div className="absolute inset-0 bg-[#E8F5E9] transform -skew-y-3" />
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl font-bold">
            We always provide you the best in town
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Since 2007 we have been delivering excellence in product
            development, support & updates for frictionless shopping
            experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-[#004D40] text-white transition-transform duration-300 hover:scale-105"
            >
              <CardContent className="p-6 space-y-4">
                <div className="p-3 bg-white/10 rounded-full w-fit">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-white/80 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
