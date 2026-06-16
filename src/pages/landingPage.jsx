import Hero from '../components/landingPage/hero';
import Categories from '../components/landingPage/categories';
import Providers from '../components/landingPage/providers';
import Features from '../components/landingPage/features';
import Testimonials from '../components/landingPage/testimonials';
import CTA from '../components/landingPage/CTA';

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Providers />
      <Features />
      <Testimonials />
      <CTA />
    </>
  );
};

export default LandingPage;