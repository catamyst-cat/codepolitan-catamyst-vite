import { Button, Divider } from "../../components";
import { dataBenefits } from "../../data";

export function HomeBenefits() {
  return (
    <section className="space-y-5">
      <header className="space-y-2">
        <h2 className="h2">Manfaat Program</h2>
        <p>
          Selain Itu kamu juga akan mendapatkan banyak manfaat setelah lulus
          dari program ini seperti:
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {dataBenefits.map((benefit) => {
          return (
            <div key={benefit.id} className="card space-y-2">
              <img
                className="max-h-[100px]"
                src={benefit.imageUrl}
                alt={benefit.title}
              />
              <h4 className="h4">{benefit.title}</h4>
              <p>{benefit.description}</p>
            </div>
          );
        })}
      </div>

      <div>
        <Button>Daftar Sekarang</Button>
      </div>
    </section>
  );
}
