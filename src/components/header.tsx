"use client";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { useTranslations } from "next-intl";

function Header() {
  const t = useTranslations("Header");
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className="bg-black text-light">
        <Container>
          <Navbar.Brand className="text-light" href="/">
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Link className="nav-link text-light" href="/">
                {t("home")}
              </Link>
              <Link className="nav-link text-light" href="/about">
                {t("about")}
              </Link>
              <Link className="nav-link text-light" href="/contact">
                {t("contact")}
              </Link>
            </Nav>
            <Nav>
              <LocaleSwitcher />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
