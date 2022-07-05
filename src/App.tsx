import { HomeBenefits, HomeHero, HomeWhy } from "./contents";
import { Layout } from "./layouts";

export default function App() {
  return (
    <Layout>
      <HomeHero />
      <HomeWhy />
      <HomeBenefits />
    </Layout>
  );
}
