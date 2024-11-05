import {
  HomeFaq,
  HomeModels,
  HomePartners,
  HomeSlider,
} from "../components/shared";

const Home = () => {
  return (
    <main>
      <HomeSlider />
      <HomeModels />
      <HomeFaq />
      <HomePartners />
    </main>
  );
};

export default Home;
