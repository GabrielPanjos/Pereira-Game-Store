import { MainTemplate } from "../../templates/MainTemplate";
import { AboutList } from "./AboutList";
import { AboutTopic } from "./AboutTopic";

export function About() {
  return (
    <MainTemplate>
      <div className="p-40 flex flex-col items-center">
        <div className="flex flex-col gap-10">
          <h1 className="font-bold text-[44px] text-sky-950">
            Sobre Pereira Game Store
          </h1>
          <div className="flex flex-col gap-8 w-200 ">
            <AboutTopic title="Missão">
              Proporcionar a melhor experiência de compra para gamers e
              entusiastas, oferecendo consoles, jogos, periféricos, móveis e
              colecionáveis de qualidade, com atendimento ágil, suporte próximo
              e preços justos. Queremos ser mais do que uma loja: nosso objetivo
              é ser um ponto de encontro para apaixonados por games, onde cada
              cliente encontra não só produtos, mas também inspiração e
              pertencimento.
            </AboutTopic>
            <AboutTopic title="Visão">
              Ser reconhecida como a maior e mais confiável loja gamer do Brasil
              até 2030, tornando-se referência em inovação, credibilidade e
              paixão pelo universo dos jogos. Desejamos criar uma comunidade
              sólida, expandindo nossas fronteiras para além do e-commerce,
              participando de eventos, lançamentos e promovendo experiências que
              aproximem cada vez mais os jogadores do seu mundo favorito.
            </AboutTopic>
            <AboutTopic title="Valores">
              <ul className="flex flex-col gap-2">
                <AboutList>
                  <strong>Paixão por games:</strong> acreditamos que jogar vai
                  além do entretenimento, é cultura, aprendizado e conexão entre
                  pessoas.
                </AboutList>
                <AboutList>
                  <strong>Respeito e transparência:</strong> valorizamos a
                  confiança do cliente, mantendo clareza em cada produto,
                  entrega e atendimento.
                </AboutList>
                <AboutList>
                  <strong>Qualidade garantida:</strong> trabalhamos apenas com
                  produtos originais e selecionados para garantir a melhor
                  experiência.
                </AboutList>
                <AboutList>
                  <strong>Inovação contínua:</strong> estamos sempre atentos às
                  novidades e tendências do universo gamer para trazer o que há
                  de mais atual.
                </AboutList>
                <AboutList>
                  <strong>Comunidade e inclusão:</strong> queremos que cada
                  gamer, seja iniciante ou veterano, sinta-se parte da Pereira
                  Game Store.
                </AboutList>
                <AboutList>
                  <strong>Compromisso com a experiência:</strong> cada detalhe,
                  desde a navegação no site até o unboxing, deve ser marcante e
                  especial.
                </AboutList>
              </ul>
            </AboutTopic>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
}
