import { Anchor, Divider } from "../../components";
import { dataMentor } from "../../data";

export function HomeMentor() {
  return (
    <section>
      <div className="flex flex-wrap lg:flex-nowrap gap-10">
        <div>
          <img
            className="rounded-full max-h-[300px]"
            src="https://program.codepolitan.com/wp-content/uploads/sites/2/2022/06/mhaidarhanif-circle.jpg"
            alt="M Haidar hanif"
          />
        </div>

        <div className="space-y-5 max-w-2xl">
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

          <div className="flex flex-wrap gap-5 text-teal-500">
            {dataMentor.externalAnchors.map((anchor) => {
              return <Anchor href={anchor.url}>{anchor.name}</Anchor>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
