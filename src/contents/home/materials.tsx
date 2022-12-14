import { ButtonAnchor, Divider } from "../../components";
import { dataMaterials } from "../../data";

export function HomeMaterials() {
  return (
    <section className="space-y-10 py-20">
      <header>
        <h1 className="h1">Materi Pembelajaran</h1>
        <Divider />
        <p>
          Kita akan belajar menggunakan alat, teknologi, dan teknik antara lain
          seperti: menentukan ide, mockup dengan prototyping, Figma, Markdown,
          GUI/CLI, GIT, GitHub, pengeditan kode (code editing), HTML, CSS,
          deployment, pemrograman (programming), JavaScript, TypeScript, Web
          API, Node.js, React, manajemen proyek, dan lainnya. Sudah termasuk
          berbagai latihan terkait masing-masing tools dan teknologi. Serta
          konsultasi terkait apapun soal pekerjaan seperti freelance,
          employment, startup, dan lainnya.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {dataMaterials.map((material) => {
          return (
            <div key={material.text} className="flex items-center">
              <span className="text-lg">{material.text}</span>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center">
        <ButtonAnchor href="https://a.catamyst.com/frontend-id">
          Lihat Silabus Lengkap
        </ButtonAnchor>
      </div>
    </section>
  );
}
