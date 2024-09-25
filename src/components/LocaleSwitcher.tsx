"use client";
import React, { useTransition } from "react";
import { useLocale } from "next-intl";
import { languages } from "@/i18n/config";
import { setUserLocale } from "@/i18n/locale";
import Dropdown from "react-bootstrap/Dropdown";

function LocaleSwitcher() {
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const languageSelectHandler: React.MouseEventHandler<HTMLElement> = async (
    e
  ) => {
    startTransition(() => {
      setUserLocale(e.currentTarget.getAttribute("data-lang")!);
    });
  };
  return (
    <Dropdown defaultValue={locale}>
      <Dropdown.Toggle
        className="text-light"
        variant="Info"
        id="dropdown-basic"
        disabled={isPending}
      >
        <i className="bi bi-translate "></i>
        {"  "}
        {languages.find((lang) => lang.code === locale)?.name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {languages.map((item) => (
          <Dropdown.Item
            key={item.code}
            data-lang={item.code}
            onClick={languageSelectHandler}
            active={item.code === locale}
          >
            {item.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LocaleSwitcher;
