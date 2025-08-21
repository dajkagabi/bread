import React from "react";
import { Icon } from "@iconify/react";

const aboutData = [
  {
    icon: "emojione-v1:bread",
    title: "Frissen sült naponta",
    description:
      "Kenyerünket naponta frissen sütjük, nem tartalmaz tartósítószert és nagyon jó minőségű. Ezenkívül kifejezetten finom és puha.",
  },
  {
    icon: "emojione-v1:money-bag",
    title: "Kiváló érték",
    description:
      "A piac legversenyképesebb áraival nagy értéket tudunk nyújtani anélkül, hogy az ízben kompromisszumot kellene kötnünk.",
  },
  {
    icon: "emojione-v1:bank",
    title: "Intézmények",
    description:
      "Intézmények széles skáláját szolgáljuk ki, beleértve az egyetemeket, légitársaságokat, szállodákat és iskolákat. Rendelj naponta holnapra.",
  },
  {
    icon: "emojione-v1:delivery-truck",
    title: "Házhoz szállítás",
    description:
      "Rugalmas és gyors házhoz szállítási szolgáltatásunkkal biztosítjuk, hogy a friss termékek időben és épségben megérkezzenek Önhöz.",
  },
  {
    icon: "emojione-v1:package",
    title: "Nincs túl nagy rendelés",
    description:
      "Bármilyen méretű rendelést szívesen fogadunk, legyen szó egyetlen péksüteményről vagy egy nagyobb rendezvény kiszolgálásáról.",
  },
  {
    icon: "emojione-v1:cookie",
    title: "Finom sütemények",
    description:
      "Kézműves süteményeink a legfinomabb alapanyagokból készülnek, garantálva a felejthetetlen ízélményt minden falatban.",
  },
];

const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-16">
          Miért minket válassz?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {aboutData.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105"
              >
                <div className="w-16 h-16 mb-4">
                  <Icon icon={item.icon} className="w-full h-full" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
