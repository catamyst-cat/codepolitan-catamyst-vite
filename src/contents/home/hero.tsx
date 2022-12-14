import { CallToActions } from "../common";

export function HomeHero() {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 sm:gap-10">
      <div className="max-w-xl space-y-6 py-12 sm:py-20">
        <header className="space-y-2">
          <h1 className="flex items-center gap-2 text-lg font-bold text-brand-600 sm:text-xl">
            <span>Belajar Dengan </span>
            <img
              className="max-h-[30px]"
              src="/images/catamyst.png"
              alt="Catamyst"
            />
          </h1>
          <h2 className="text-4xl font-bold sm:text-5xl">
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

        <CallToActions />
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
