import Logo from "../../../img/Logo.png"

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export const LOGO_CONFIG = {
  src: Logo,
  alt: "Wise Network Logo",
  href: "/"
};

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '/', active: true },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Autorizadas', href: '#autorizadas' },
  { label: 'Contato', href: '#contato' },
];