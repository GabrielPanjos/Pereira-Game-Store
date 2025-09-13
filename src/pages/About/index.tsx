import { MainTemplate } from "../../templates/MainTemplate";

export function About() {
  return (
    <MainTemplate>
      <div className="p-40 flex flex-col items-center">
        <div className="flex flex-col gap-10">
          <h1 className="font-bold text-[40px]">Sobre Pereira Game Store</h1>
          <div className="flex flex-col gap-4 w-200 font-medium text-2xl">
            <h2>Missão</h2>
            <p>
              Levar diversão, tecnologia e experiências únicas para gamers de
              todas as idades, oferecendo produtos de qualidade, atendimento
              próximo e preços justos.
            </p>
            <h2>Visão</h2>
            <p>
              Ser a principal referência em e-commerce de games no Brasil até
              2030, reconhecida pela inovação, confiança e paixão pelo universo
              gamer.
            </p>
            <h2>Valores</h2>
            <p>
              Ser a principal referência em e-commerce de games no Brasil até
              2030, reconhecida pela inovação, confiança e paixão pelo universo
              gamer.
            </p>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
}
