import {
  HomeBenefits,
  HomeHero,
  HomeLearningFlow,
  HomeMaterials,
  HomeMentor,
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
    </Layout>
  );
}
