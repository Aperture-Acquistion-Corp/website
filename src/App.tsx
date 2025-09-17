import tw, { GlobalStyles } from 'twin.macro';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Strategy from './components/Strategy';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { createGlobalStyle } from 'styled-components';

const CustomStyles = createGlobalStyle`
  .hero-gradient {
    background: linear-gradient(135deg, #000428 0%, #004e92 100%);
  }
  .btn-gradient {
    background: linear-gradient(90deg, #3B82F6 0%, #1D4ED8 100%);
  }
  .btn-gradient:hover {
    background: linear-gradient(90deg, #1D4ED8 0%, #3B82F6 100%);
  }
`;

const Main = tw.main`font-sans antialiased text-gray-800`;

function App() {
  return (
    <Main>
      <GlobalStyles />
      <CustomStyles />
      <Navigation />
      <Hero />
      <About />
      <Strategy />
      <Team />
      <Contact />
      <Footer />
    </Main>
  );
}

export default App;
