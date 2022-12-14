import { Divider } from "../../components";
import { dataProjects } from "../../data";

export function HomeProjects() {
  return (
    <section className="py-20 space-y-10">
      <header className="space-y-5 flex flex-col md:items-center">
        <h1 className="h1">Studi Kasus Proyek Utama</h1>
        <Divider />
        <p className="max-w-xl md:text-center">
          Semua proyek dikembangkan hingga setup ke domain yang kamu punya
          seperti namakita.com, perusahaan.com, atau aplikasi.com Sehingga
          portofolio kamu lebih meyakinkan dan dapat diakses sungguhan oleh
          berbagai orang.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {dataProjects.map((project) => {
          return (
            <div key={project.title}>
              <img src={project.imageUrl} alt={project.title} />
              <Divider className="max-w-2xl" />
              <h4 className="h4">{project.title}</h4>
              <p>{project.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
