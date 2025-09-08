import { LinksStore } from "./LinksStore";
import { FooterLinks } from "./LinksStore/FooterLinks";

export function Footer() {
  return (
    <footer className="bg-sky-950 w-full">
      <div className="m-16 flex flex-col gap-20 text-slate-100">
        <div className="flex ml-20 mr-20 mb-30 gap-40">
          <LinksStore title="Loja">
            <FooterLinks href="#">Sobre nós</FooterLinks>
            <FooterLinks href="#">Contato / Suporte</FooterLinks>
            <FooterLinks href="#">Termos de uso</FooterLinks>
            <FooterLinks href="#">Política de privacidade</FooterLinks>
          </LinksStore>
        </div>
      </div>
      <div className="italic bg-slate-900 h-30 text-slate-100 w-full flex justify-center items-center">
        Pereira Game Store &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
}
