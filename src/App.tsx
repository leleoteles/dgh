import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { Approach } from './components/sections/Approach';
import { About } from './components/sections/About';
import { Ecosystem } from './components/sections/Ecosystem';
import { CTA } from './components/sections/CTA';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { FadeIn } from './components/ui/FadeIn';

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <FadeIn><Stats /></FadeIn>
      <FadeIn><Approach /></FadeIn>
      <FadeIn><About /></FadeIn>
      <FadeIn><Ecosystem /></FadeIn>
      <FadeIn><CTA /></FadeIn>
      <FadeIn><Contact /></FadeIn>
      <Footer />
    </main>
  )
}

export default App
