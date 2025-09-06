import { LinksStore } from "./LinksStore";
import { FooterLinks } from "./LinksStore/FooterLinks";

export function Footer() {
  return (
    <footer className="bg-sky-950 w-full">
      <div className="m-16 flex flex-col gap-20 text-slate-100">
        <div className="flex gap-40">
          <LinksStore title="Pereira Game Store">
            <FooterLinks href="#">Sobre nós</FooterLinks>
            <FooterLinks href="#">Contato / Suporte</FooterLinks>
            <FooterLinks href="#">Termos de uso</FooterLinks>
            <FooterLinks href="#">Política de privacidade</FooterLinks>
          </LinksStore>
        </div>
        <div className="italic h-full w-full flex justify-center items-center">
          Pereira Game Store &copy; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
