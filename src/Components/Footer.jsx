import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#2a93c9] text-white">
      <div className="footerWrap container w-11/12 mx-auto flex max-[600px]:flex-col  justify-between py-4">
        <div className="w-1/3 footerWidth">
          <span className=" flex items-end gap-5">
            <h2 className="footerHeader text-5xl font-[700]">LOGO</h2>
          </span>
          <div className="flex items-center gap-8 py-3 pt-6">
            <a
              target="_blank"
              className="opacity-70 hover:opacity-100"
              href="https://t.me/Mr_Abdulloh"
            >
              <i className="fa-2xl fa-brands fa-telegram"></i>
            </a>
            <a
              target="_blank"
              className="opacity-70 hover:opacity-100"
              href="#"
            >
              <i className="fa-2xl fa-brands fa-instagram"></i>
            </a>
            <a
              target="_blank"
              className="opacity-70 hover:opacity-100"
              href="#"
            >
              <i className="fa-2xl fa-brands fa-facebook"></i>
            </a>
            <a
              target="_blank"
              className="opacity-70 hover:opacity-100"
              href="#"
            >
              <i className="fa-2xl fa-brands fa-youtube"></i>
            </a>
            <a
              target="_blank"
              className="opacity-70 hover:opacity-100"
              href="#"
            >
              <i className="fa-2xl fa-brands fa-tiktok"></i>
            </a>
          </div>
        </div>
        <div className="w-1/3 footerWidth max-[600px]:w-full max-[600px]:mt-5">
          <h2 className="contactsHeading text-xl font-[700] pb-3">
            {t("Nav_Contact_Link")}
          </h2>
          <ul className="footerContacts flex flex-wrap flex-col max-[600px]:flex-row max-[600px]:gap-x-5 gap-1">
            <li>
              <a
                className="opacity-75 hover:opacity-100 hover:underline"
                href="tel:+998123456789"
              >
                +998 12 345 67 89
              </a>
            </li>
            <li>
              <a
                className="opacity-75 hover:opacity-100 hover:underline"
                href="tel:+998123456789"
              >
                +998 98 765 43 21
              </a>
            </li>
            <li>
              <a
                className="opacity-75 hover:opacity-100 hover:underline"
                href="https://t.me/Mr_Abdulloh"
              >
                Telegram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container w-11/12 mx-auto py-4">
        <span className="w-3/6 max-[600px]:w-full footerWidth flex flex-wrap items-center justify-between text-lg">
          <Link className="opacity-75 hover:opacity-100" to="/">
            {t("Nav_Home_Link")}
          </Link>
          <Link className="opacity-75 hover:opacity-100" to="/services">
            {t("Nav_Services_Link")}
          </Link>
          <Link className="opacity-75 hover:opacity-100" to="/doctors">
            {t("Nav_Doctors_Link")}
          </Link>
          <Link className="opacity-75 hover:opacity-100" to="/about">
            {t("Nav_About_Link")}
          </Link>
          <Link className="opacity-75 hover:opacity-100" to="/contact">
            {t("Nav_Contact_Link")}
          </Link>
          <Link className="opacity-75 hover:opacity-100" to="/articles">
            {t("Nav_Articles_Link")}
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
