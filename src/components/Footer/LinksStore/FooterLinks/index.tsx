import { Link } from "react-router-dom";

type FooterLinksProps = {
  children: string;
  to: string;
};

export function FooterLinks({ children, to }: FooterLinksProps) {
  return (
    <li className="hover:text-slate-300">
      <Link to={to}>{children}</Link>
    </li>
  );
}
