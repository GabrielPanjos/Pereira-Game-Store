import { LinksStore } from "./LinksStore";
import { FooterLinks } from "./LinksStore/FooterLinks";

export function Footer() {
  return (
    <footer className="bg-sky-950 w-full">
      <div className="p-8 flex flex-col gap-20 text-slate-100">
        <div className="flex justify-center mt-20 mb-30 gap-40">
          <LinksStore title="Loja">
            <FooterLinks to="/about">Sobre nós</FooterLinks>
            <FooterLinks to="/contact">Contato / Suporte</FooterLinks>
            <FooterLinks to="/terms">Termos de uso</FooterLinks>
            <FooterLinks to="/privacy">Política de privacidade</FooterLinks>
          </LinksStore>

          <LinksStore title="Categorias">
            <FooterLinks to="/">Todos</FooterLinks>
            <FooterLinks to="/category/consoles">Consoles</FooterLinks>
            <FooterLinks to="/category/jogos">Jogos</FooterLinks>
            <FooterLinks to="/category/perifericos">Periféricos</FooterLinks>
            <FooterLinks to="/category/moveis">Móveis</FooterLinks>
            <FooterLinks to="/category/colecionaveis">
              Colecionáveis
            </FooterLinks>
          </LinksStore>
        </div>
      </div>
      <div className="italic bg-slate-900 h-30 text-slate-100 w-full flex justify-center items-center">
        Pereira Game Store &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
}
