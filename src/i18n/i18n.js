import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbacking: "uz",
  lng: "uz",
  resources: {
    en: {
      translation: {
        // Navbar
        Nav_Home_Link: "Home",
        Nav_Services_Link: "Services",
        Nav_Doctors_Link: "Doctors",
        Nav_About_Link: "About us",
        Nav_Contact_Link: "Contact us",
        Nav_Articles_Link: "Articles",
        
      },
    },
    uz: {
      translation: {
        // Navbar
        Nav_Home_Link: "Bosh Sahifa",
        Nav_Services_Link: "Xizmatlar",
        Nav_Doctors_Link: "Shifokorlar",
        Nav_About_Link: "Biz haqimizda",
        Nav_Contact_Link: "Bog'lanish",
        Nav_Articles_Link: "Maqolalar",
        
      },
    },
    ru: {
      translation: {
        // Navbar
        Nav_Home_Link: "Главная страница",
        Nav_Services_Link: "ruКурсы",
        Nav_Doctors_Link: "ruСвязаться с нами",
        Nav_About_Link: "ruНовости",
        Nav_Contact_Link: "ruЗарегистрироваться",
        Nav_Articles_Link: "ruMaqolara",
        
      },
    },
  },
});

export default i18n;
