import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { AboutUs, CallToAction, CustomerReviews, Hero, Nav, Services } from './sections/index'

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="relative font-satoshi text-primary max-lg:p-5 p-4 max-w-7xl m-auto">
      <section className="">
        <Nav />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <AboutUs />
      </section>
      <section>
        <CustomerReviews />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <CallToAction />
      </section>
    </main>
  );
}

export default App;
