import { useTranslations } from "next-intl";
import React from "react";
import Container from "react-bootstrap/Container";

function ContactPage() {
  const t = useTranslations("ContactPage");
  return (
    <section className="section">
      <Container>
        <h2 className="text-center">{t("title")}</h2>
      </Container>
    </section>
  );
}

export default ContactPage;
