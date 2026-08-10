import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { LOGO_URL, NAV_LINKS } from "@/lib/content";
import styles from "./Nav.module.css";

export function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logo}>
          <Image
            src={LOGO_URL}
            alt="Asian Top Wellness"
            width={245}
            height={101}
            priority
            className={styles.logoImg}
          />
        </a>
        <div className={styles.links}>
          {NAV_LINKS.map((link, i) => (
            <a key={link.href} href={link.href} className={i === 0 ? styles.linkActive : styles.link}>
              {link.label}
            </a>
          ))}
        </div>
        <Button href="#contact" variant="primary" size="sm">
          Create Your Product
        </Button>
      </div>
    </nav>
  );
}
