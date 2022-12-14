import IconRegister from "~icons/ph/pencil-simple-fill";
import IconWhatsApp from "~icons/ph/whatsapp-logo-fill";
import IconTelegram from "~icons/ph/telegram-logo-fill";

import { ButtonAnchor } from "../../components";

const urls = {
  form: "https://form.codepolitan.com/catamyst",
  telegram: "https://t.me/codepolitan_catamyst",
  whatsapp:
    "https://wa.me/08999488990?text=Halo%20saya%20mau%20bertanya%20terkait%20Bootcamp%20Frontend%20Web%20Development",
};

export const CallToActions = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <ButtonAnchor href={urls.form}>
        <IconRegister />
        <span>Daftar</span>
      </ButtonAnchor>
      <ButtonAnchor href={urls.whatsapp}>
        <IconWhatsApp />
        <span>Konsultasi WhatsApp</span>
      </ButtonAnchor>
      <ButtonAnchor href={urls.telegram}>
        <IconTelegram />
        <span>Konsultasi Telegram</span>
      </ButtonAnchor>
    </div>
  );
};
