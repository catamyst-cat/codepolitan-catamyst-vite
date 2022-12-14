import { Divider } from "../../components";
import { dataLearningFlow } from "../../data";

export function HomeLearningFlow() {
  return (
    <section className="py-20 flex flex-col items-center">
      <header className="flex flex-col lg:items-center">
        <h1 className="h1">Alur Belajar</h1>
        <Divider />
      </header>

      <div className="space-y-5 max-w-2xl">
        {dataLearningFlow.map((flow) => {
          return (
            <div
              key={flow.title}
              className="card flex flex-wrap sm:flex-nowrap gap-5 items-center"
            >
              <div>
                <img
                  className="max-w-[150px]"
                  src={flow.imageUrl}
                  alt={flow.title}
                />
              </div>
              <div className="space-y-2">
                <h4 className="h4">{flow.title}</h4>
                <p className="max-w-lg">{flow.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
