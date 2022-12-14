import {
  HomeBenefits,
  HomeHero,
  HomeLearningFlow,
  HomeMaterials,
  HomeMentor,
  HomeProjects,
  HomeTestimonials,
  HomeWhy,
} from "./contents";
import { Layout } from "./layouts";

export default function App() {
  return (
    <Layout>
      <HomeHero />
      <HomeWhy />
      <HomeBenefits />
      <HomeMaterials />
      <HomeMentor />
      <HomeLearningFlow />
      <HomeProjects />
      <HomeTestimonials />
    </Layout>
  );
}
