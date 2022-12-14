import { Anchor, Divider } from "../../components";
import { dataMentor } from "../../data";

export function HomeMentor() {
  return (
    <section>
      <div className="flex flex-wrap gap-10 lg:flex-nowrap">
        <div>
          <img
            className="max-h-[300px] rounded-full"
            src="https://program.codepolitan.com/wp-content/uploads/sites/2/2022/06/mhaidarhanif-circle.jpg"
            alt="M Haidar hanif"
          />
        </div>

        <div className="max-w-2xl space-y-5">
          <header>
            <h1 className="h1">Halo! Saya M Haidar Hanif</h1>
            <Divider />
          </header>

          <div className="space-y-2">
            <p>
              Saya ingin membantumu untuk memulai ataupun menjadi lebih baik
              dalam proses mempelajari teknologi serta kesuksesan karirmu untuk
              jangka panjang.
            </p>
            <p>
              Posisi saya sekarang adalah
              <span>
                {" "}
                Founder dan Mentor di{" "}
                <Anchor href="https://catamyst.com">Catamyst</Anchor>,
              </span>
              <span>
                {" "}
                Content Creator di{" "}
                <Anchor href="https://codepolitan.com">CodePolitan</Anchor>,
              </span>
              <span>
                {" "}
                Curriculum Contributor di{" "}
                <Anchor href="https://revou.co/software-engineering">
                  RevoU
                </Anchor>
                ,
              </span>
              <span>
                {" "}
                Developer Relations Lead di{" "}
                <Anchor href="https://kontenbase.com">Kontenbase</Anchor>,
              </span>{" "}
              <span>
                Product Engineer di{" "}
                <Anchor href="https://poinswap.com">Poinswap</Anchor>,
              </span>{" "}
              serta konsultan web di berbagai proyek. Sebelumnya saya adalah
              Co-Founder dan Lead Mentor di{" "}
              <Anchor href="https://impactbyte.com">Impact Byte</Anchor>, Senior
              Instructor di{" "}
              <Anchor href="https://hacktiv8.com/">Hacktiv8</Anchor>, dan
              berbagai peran di perusahaan teknologi.
            </p>
          </div>

          <div className="flex flex-wrap gap-5">
            {dataMentor.externalAnchors.map((anchor) => {
              return (
                <Anchor
                  className="font-bold text-brand-700 hover:text-brand-600"
                  href={anchor.url}
                >
                  <span>{anchor.name}</span>
                </Anchor>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
