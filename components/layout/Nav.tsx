"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { LOGO_URL, NAV_LINKS } from "@/lib/content";
import styles from "./Nav.module.css";

export function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          <Image
            src={LOGO_URL}
            alt="Asian Top Wellness"
            width={245}
            height={101}
            priority
            className={styles.logoImg}
          />
        </Link>
        <div className={styles.links}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? styles.linkActive : styles.link}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className={styles.cta}>
          <Button href="/contact#enquiry" variant="primary" size="sm">
            Create Your Product
          </Button>
        </div>
        <button
          type="button"
          className={styles.menuButton}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={menuOpen ? styles.barTopOpen : styles.bar} />
          <span className={menuOpen ? styles.barMidOpen : styles.bar} />
          <span className={menuOpen ? styles.barBotOpen : styles.bar} />
        </button>
      </div>
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className={styles.mobileMenuInner}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              tabIndex={menuOpen ? 0 : -1}
              className={
                pathname === link.href ? styles.mobileLinkActive : styles.mobileLink
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className={styles.mobileCta}>
            <Button href="/contact#enquiry" variant="primary" size="sm">
              Create Your Product
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
