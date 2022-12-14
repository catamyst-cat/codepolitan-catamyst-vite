import { Divider } from "../../components";

export function HomeWhy() {
  return (
    <section className="py-20">
      <header className="flex flex-col lg:items-center">
        <h1 className="h1">Mengapa belajar dengan CodePolitan × Catamyst?</h1>
        <Divider />
      </header>

      <div className="flex flex-col lg:items-center">
        <div className="max-w-3xl space-y-5">
          <img
            className=" w-full rounded-xl"
            src="https://program.codepolitan.com/wp-content/uploads/sites/2/2022/06/000.jpeg"
            alt="Video Cover"
          />
          <div className="space-y-3 text-lg">
            <p>
              Tim dari Catamyst telah berpengalaman dalam menyelenggarakan
              pembelajaran, kelas, dan bootcamp terkait web development selama
              bertahun-tahun.
            </p>
            <p>
              Sekarang sedang terafiliasi dengan CodePolitan dan RevoU.
              Sebelumnya pernah terafiliasi dengan Impact Byte dan Hacktiv8.
            </p>
            <p>
              Telah mengajar secara publik dan prifat kepada lebih dari ratusan
              orang baik personal, kelompok, organisasi, dan perusahaan.
            </p>
            <p>
              Fokus dari kelas ini adalah desain, pengembangan, dan pemrograman
              pada sisi frontend. Bagian "depan" ini semua akan dilihat dan
              digunakan oleh pengunjung website atau pengguna aplikasi kita.
              Maka penguasaan hal-hal tersebut harus dimiliki oleh frontend web
              developer/programmer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
