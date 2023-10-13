import { footer_links } from "../constants/navLinks";

const CallToAction = () => {
  return (
    <div className="flex flex-col p-12 bg-secondary rounded-[40px] text-white max-lg:items-start mt-8">
      <div className="flex justify-between items-center w-full max-sm:flex-col gap-10 max-sm:items-start">
        <h1 className="text-7xl font-semibold max-lg:text-6xl max-sm:text-5xl">
          Start Your <br />
          Project Now!
        </h1>
        <a href="">
          <div className="rounded-[40px] w-[200px] h-[200px] bg-tertiary flex justify-center items-center">
            <p className="font-bold">Contact Us</p>
          </div>
        </a>
      </div>
      <p className="mt-10 text-2xl  max-w-[400px] break-auto">
        Made for your convenience for a
        more beautiful future for you and
        your family.
      </p>
      <nav className="flex justify-between sm:p-4 lg:bg-tertiary lg:rounded-full lg:mt-32 max-lg:flex-col">
        <p className="font-bold text-2xl lg:ml-8  max-lg:my-10">Hulty</p>
        <div className="flex justify-between gap-8 lg:mr-8 max-lg:flex-col text-center max-lg:gap-4 max-lg:items-start">
          {footer_links.map((link) => (
            <a key={link.name} href={link.link}>
              {link.name}
            </a>
          ))}
        </div>
      </nav>
          <p className="text-center mt-4">Made with ❤️ from <a href="https://github.com/mohamedregragui">Medagui</a></p>
        
    </div>
  );
};

export default CallToAction;
