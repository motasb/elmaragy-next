import Image from "next/image";
import MainTitle from "./MainTitle";
import { features } from "@/lib/data";

const Features = () => {
  return (
    <section className="py-16 bg-background rounded-3xl">
      <MainTitle
        badge="Useful Features"
        title="to know to start with us Everything you need"
        subtitle="We Assure you the following features."
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden sm:block">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-4 px-2">
                <div className="flex justify-center">
                  <Image
                    src={feature.image}
                    alt={feature.h5}
                    width={80}
                    height={80}
                    className="mx-auto rounded-4xl"
                  />
                </div>
                <h5 className="text-lg font-semibold">{feature.h5}</h5>
                <p className="text-sm text-muted-foreground">{feature.p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
