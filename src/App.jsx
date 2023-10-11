import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { AboutUs, CallToAction, CustomerReviews, Hero, Nav, Services } from './sections/index'

function App() {
  const [count, setCount] = useState(0);
  const [isMenuShown, setIsMenuShown] = useState()

  return (
    <main className="relative font-satoshi text-primary dark:text-white max-lg:p-5 p-4 max-w-7xl m-auto ">
      <nav className="">
        <Nav isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown}/>
      </nav>
      <header id="home">
        <Hero />
      </header>
      <section id="about-us">
        <AboutUs />
      </section>
      <section id="customer-reviews">
        <CustomerReviews />
      </section>
      <section>
        <Services />
      </section>
      <footer>
        <CallToAction />
      </footer>
    </main>
  );
}

export default App;
