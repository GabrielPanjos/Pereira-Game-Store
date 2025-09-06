type FooterLinksProps = {
  children: string;
  href: string;
};

export function FooterLinks({ children, href }: FooterLinksProps) {
  return (
    <li className="hover:text-slate-300">
      <a href={href}>{children}</a>
    </li>
  );
}
