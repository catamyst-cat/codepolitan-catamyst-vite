import { Button, ButtonAnchor } from "../../components";

const urlToWhatsApp =
  "https://wa.me/08999488990?text=Halo%20saya%20mau%20bertanya%20terkait%20Bootcamp%20Frontend%20Web%20Development";
const urlToTelegram = "https://t.me/codepolitan_catamyst";

export function HomeHero() {
  return (
    <section className="flex gap-5 sm:gap-10 flex-wrap justify-between items-center">
      <div className="max-w-lg space-y-6 py-12 sm:py-20">
        <header className="space-y-2">
          <h1 className="text-lg sm:text-xl font-bold text-brand-600 flex items-center gap-2">
            <span>Belajar Dengan </span>
            <img
              className="max-h-[30px]"
              src="/images/catamyst.png"
              alt="Catamyst"
            />
          </h1>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Bootcamp Frontend Web Development
          </h2>
        </header>

        <div className="space-y-3 text-lg">
          <p>
            Ayo kita belajar web development dengan langsung dimentori oleh
            ahlinya!
          </p>
          <p>
            Mulai dari prinsip fundamental hingga teknik yang modern. Agar hasil
            website dan aplikasimu bisa canggih dan juga nyaman.
          </p>
          <p>
            Dengan alur kerja profesional, membantumu membuat proyek nyata,
            mendapatkan pekerjaan, melakukan freelancing, memulai tech business,
            bahkan kerja online secara remote.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <ButtonAnchor href={urlToWhatsApp}>Konsultasi WhatsApp</ButtonAnchor>
          <ButtonAnchor href={urlToTelegram}>Konsultasi Telegram</ButtonAnchor>
        </div>
      </div>

      <div>
        <img
          className="max-w-[400px]"
          src="https://program.codepolitan.com/wp-content/uploads/sites/2/2022/05/sample.png"
          alt="Home Hero"
        />
      </div>
    </section>
  );
}
