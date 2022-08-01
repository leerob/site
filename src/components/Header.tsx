import MobileMenu from '@/components/MobileMenu';
import NavItem from '@/components/NavItem';
import ToggleMode from '@/components/ToggleMode';
import { NAV_LINKS } from '@/config';

export default function Header() {
  return (
    <div className="flex flex-col justify-center px-8">
      <nav className="flex items-center justify-between w-full relative max-w-2xl mx-auto pt-8 pb-8 md:pb-16">
        <a href="#skip" className="skip-nav">
          Skip to content
        </a>
        <div className="ml-[-0.60rem">
          <MobileMenu />
          {NAV_LINKS.map((item, index) => (
            <NavItem key={index} href={item.href} text={item.text} />
          ))}
        </div>
        <ToggleMode />
      </nav>
    </div>
  );
}
