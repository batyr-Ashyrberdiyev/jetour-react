import { HomeBenefits, HomeFaq, HomeModels, HomePartners, HomeSlider } from '../components/shared';

const Home = () => {
  return (
    <main>
      <HomeSlider />
      <HomeModels />
      <HomeFaq />
      <HomePartners />
      <HomeBenefits />
    </main>
  );
};

export default Home;
