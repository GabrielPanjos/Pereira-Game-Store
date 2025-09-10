import { MainTemplate } from "../../templates/MainTemplate";
import { ContactButton } from "./ContactButton";

import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <MainTemplate>
      <section className="p-40 gap-15 flex flex-col bg-slate-100 text-slate-900">
        <h1 className="text-[40px] font-bold">Contatos</h1>
        <div className="flex flex-col gap-6">
          <ContactButton href="https://github.com/GabrielPanjos" Icon={Github}>
            Github
          </ContactButton>
          <ContactButton
            href="https://www.instagram.com/gapanjos/?next=%2F"
            Icon={Instagram}
          >
            Instagram
          </ContactButton>
          <ContactButton
            href="https://www.linkedin.com/in/gabrielp-anjos"
            Icon={Linkedin}
          >
            Linkedin
          </ContactButton>
          <ContactButton
            href="mailto:pereiradosanjosgabriel@gmail.com"
            Icon={Mail}
          >
            E-mail
          </ContactButton>
        </div>
      </section>
    </MainTemplate>
  );
}
