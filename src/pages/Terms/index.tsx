import { Topic } from "../../components/Topic";
import { MainTemplate } from "../../templates/MainTemplate";

export function Terms() {
  return (
    <MainTemplate>
      <div className="p-40 flex flex-col items-center">
        <div className=" flex-col w-200">
          <ul className="flex flex-col gap-4">
            <Topic title="Introdução">
              Ao acessar ou realizar compras na Pereira Game Store, você
              concorda com os presentes Termos de Uso. Caso não concorde,
              pedimos que não utilize nossos serviços.
            </Topic>
            <Topic title="Cadastro e Conta">
              O cliente é responsável por manter seus dados de acesso seguros.
              Informações falsas ou incorretas podem levar ao cancelamento da
              conta.
            </Topic>
            <Topic title="Produtos e Disponibilidade">
              Os produtos exibidos podem ter variações de cor e design conforme
              disponibilidade em estoque. A Pereira Game Store reserva-se o
              direito de atualizar preços sem aviso prévio.
            </Topic>
            <Topic title="Pagamentos">
              Os pagamentos são processados por parceiros confiáveis e seguros.
              Não armazenamos informações completas de cartão de crédito em
              nossos servidores.
            </Topic>
            <Topic title="Envio e Entrega">
              O prazo informado no ato da compra é uma estimativa. A Pereira
              Game Store não se responsabiliza por atrasos ocasionados por
              terceiros.
            </Topic>
            <Topic title="Trocas e Devoluções">
              O cliente tem até 7 (sete) dias corridos, a contar do recebimento,
              para solicitar devolução do produto em caso de arrependimento,
              conforme o Código de Defesa do Consumidor.
            </Topic>
            <Topic title="Propriedade Intelectual">
              Marca, logo e conteúdo não podem ser copiados sem autorização.
            </Topic>
            <Topic title="Limitação de Responsabilidade">
              Loja não se responsabiliza por mau uso dos produtos.
            </Topic>
            <Topic title="Alterações nos Termos">
              A Pereira Game Store reserva-se o direito de alterar estes Termos
              a qualquer momento, sendo responsabilidade do cliente revisá-los
              periodicamente.
            </Topic>
            <Topic title="Contato">
              Em caso de dúvidas, entre em contato pelo e-mail:
              contato@pereiragamestore.com
            </Topic>
          </ul>
        </div>
      </div>
    </MainTemplate>
  );
}
