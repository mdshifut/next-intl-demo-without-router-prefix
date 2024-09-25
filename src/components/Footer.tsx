import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="bg-dark py-3">
      <Container>
        <div className="text-center mb-3 footer-menu">
          <Link href="/">{t("home")}</Link>
          <Link href="/about">{t("about")}</Link>
          <Link href="/contact">{t("contact")}</Link>
        </div>
        <p className="text-light text-center">&copy; {t("copyText")}</p>
      </Container>
    </footer>
  );
}
