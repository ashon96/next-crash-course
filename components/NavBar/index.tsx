import componentStyles from "./NavBar.module.scss";
import Link from "next/link";

const NavBar: React.FC = () => {
  const links: { href: string; text: string }[] = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
  ];
  return (
    <nav className={componentStyles.nav}>
      <ul className={componentStyles.list}>
        {links.map((link) => (
          <li key={link.text} className={componentStyles["link-style"]}>
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
