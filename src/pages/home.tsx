import HomeFaq from '../components/shared/home-faq';
import HomeModels from '../components/shared/home-models';
import HomeSlider from '../components/shared/home-slider';

const Home = () => {
  return (
    <main>
      <HomeSlider />
      <HomeModels />
      <HomeFaq />
    </main>
  );
};

export default Home;
