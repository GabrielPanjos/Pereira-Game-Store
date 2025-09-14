import { MainTemplate } from "../../templates/MainTemplate";
import { Topic } from "../../components/Topic";

export function Privacy() {
  return (
    <MainTemplate>
      <div className="p-40 flex flex-col items-center">
        <div className="flex-col w-200">
          <ul className="flex flex-col gap-4">
            <Topic title="Introdução">
              A Pereira Game Store valoriza a privacidade e a segurança dos
              dados de seus clientes. Esta Política de Privacidade descreve como
              coletamos, usamos e protegemos suas informações.
            </Topic>
            <Topic title="Coleta de Informações">
              Podemos coletar dados pessoais como nome, e-mail, endereço,
              telefone e informações de pagamento fornecidas durante o cadastro
              ou compra.
            </Topic>
            <Topic title="Uso das Informações">
              Os dados coletados são utilizados para processar pedidos, oferecer
              suporte ao cliente, melhorar nossos serviços e enviar comunicações
              relevantes (como promoções e novidades).
            </Topic>
            <Topic title="Compartilhamento de Dados">
              Não vendemos ou alugamos informações pessoais. Os dados podem ser
              compartilhados apenas com parceiros confiáveis (como meios de
              pagamento e transportadoras) para viabilizar os serviços.
            </Topic>
            <Topic title="Segurança das Informações">
              Utilizamos medidas de segurança técnicas e organizacionais para
              proteger seus dados contra acessos não autorizados, perdas ou
              alterações.
            </Topic>
            <Topic title="Cookies e Tecnologias">
              Nosso site pode utilizar cookies para melhorar sua experiência de
              navegação. Você pode desativá-los no seu navegador, mas algumas
              funcionalidades podem ser afetadas.
            </Topic>
            <Topic title="Direitos do Usuário">
              Você pode solicitar acesso, correção ou exclusão de seus dados
              pessoais a qualquer momento, em conformidade com a LGPD.
            </Topic>
            <Topic title="Alterações na Política">
              Esta Política pode ser atualizada periodicamente. Recomendamos
              revisá-la com frequência para estar ciente de eventuais mudanças.
            </Topic>
            <Topic title="Contato">
              Em caso de dúvidas sobre esta Política de Privacidade e Segurança,
              entre em contato pelo e-mail: contato@pereiragamestore.com
            </Topic>
          </ul>
        </div>
      </div>
    </MainTemplate>
  );
}
