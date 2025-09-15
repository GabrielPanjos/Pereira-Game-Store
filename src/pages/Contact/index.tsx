import { MainTemplate } from "../../templates/MainTemplate";
import { IconButton } from "../../components/IconButton";

import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <MainTemplate>
      <section className="p-40 gap-15 flex flex-col bg-slate-100 text-slate-900">
        <h1 className="text-[40px] font-bold">Contatos</h1>
        <div className="flex flex-col gap-6">
          <IconButton href="https://github.com/GabrielPanjos" Icon={Github}>
            Github
          </IconButton>
          <IconButton
            href="https://www.instagram.com/gapanjos/?next=%2F"
            Icon={Instagram}
          >
            Instagram
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/gabrielp-anjos"
            Icon={Linkedin}
          >
            Linkedin
          </IconButton>
          <IconButton
            href="mailto:pereiradosanjosgabriel@gmail.com"
            Icon={Mail}
          >
            E-mail
          </IconButton>
        </div>
        <h1 className="text-[40px] font-bold">Suporte</h1>
        <div>
          <h2>nos de sugestões!</h2>
        </div>
      </section>
    </MainTemplate>
  );
}
