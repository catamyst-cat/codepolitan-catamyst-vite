import { Divider } from "../../components";
import { dataTestimonials } from "../../data";

export function HomeTestimonials() {
  return (
    <section className="py-20 space-y-10">
      <header className="space-y-5 flex flex-col md:items-center">
        <h1 className="h1">Testimonial</h1>
        <Divider />
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {dataTestimonials.map((testimonial) => {
          return (
            <div key={testimonial.user.name} className="card space-y-5">
              <div className="flex gap-5">
                <img
                  className="rounded-full h-[100px] w-[100px]"
                  src={testimonial.user.avatarImageUrl}
                  alt={testimonial.user.name}
                />
                <div className="space-y-2">
                  <h4 className="h4">{testimonial.user.name}</h4>
                  <h5 className="h5">{testimonial.user.job}</h5>
                  <h6 className="uppercase">{testimonial.user.country}</h6>
                </div>
              </div>

              <p>{testimonial.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
