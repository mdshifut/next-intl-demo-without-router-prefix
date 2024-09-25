import { useTranslations } from "next-intl";
import React from "react";
import Container from "react-bootstrap/Container";

function AboutPage() {
  const t = useTranslations("AboutPage");
  return (
    <section className="section">
      <Container>
        <h2 className="text-center">{t("title")}</h2>
      </Container>
    </section>
  );
}

export default AboutPage;
