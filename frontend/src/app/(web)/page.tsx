import Gallery from '@/components/Gallery/Gallery';
import HeroSection from '@/components/HeroSection/HeroSection';
import NewsLetter from '@/components/Newsletter/Newsletter';
import PageSearch from '@/components/PageSearch/PageSearch';

const Home = () => {
  return (
    <>
      <HeroSection />
      <PageSearch />
      <Gallery />
      <NewsLetter />
    </>
  );
};
export default Home;
