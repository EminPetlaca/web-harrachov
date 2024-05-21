import Header from '../../components/Header/Header';
import ObecDrop from '../../components/Menus/DropDowns/ObecDrop';
import MainSection from '../../components/Sections/MainSection/MainSection';
import NewsSection from '../../components/Sections/NewsSection/NewsSection';
import ZnakSection from '../../components/Sections/ZnakSection/ZnakSection';
import Footer from '../../components/Footer/Footer';
import AboutSection from '../../components/Sections/AboutSection/AboutSection';
import SecondFooter from '../../components/Footer/SecondFooter';

export default function Home() {
  return (
    <>
      <Header />
      <MainSection/>
      <NewsSection />
      <ZnakSection/>
      <AboutSection/>
      <Footer />
      <SecondFooter/>
     
    </>
  );
}
