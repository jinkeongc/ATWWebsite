"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { LOGO_URL, NAV_LINKS } from "@/lib/content";
import styles from "./Nav.module.css";

export function Nav() {
  const pathname = usePathname();

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
        <Button href="/contact#enquiry" variant="primary" size="sm">
          Create Your Product
        </Button>
      </div>
    </nav>
  );
}
