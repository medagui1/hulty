import long_shoot from "../assets/long_shoot.webp";
import Button from "../components/Button";

const AboutUs = () => {
  return (
    <div className="flex mt-8 gap-10 max-lg:flex-col max-h-4xl ">
      <div className="">
        <img
          src={long_shoot}
          loading="lazy"
          alt=""
          className="h-[600px] w-[250px] max-lg:hidden"
        />
      </div>
      <div className="flex flex-col bg-primary dark:bg-secondary px-40 max-lg:p-10 max-w-5xl pb-30 rounded-[50px] flex-1">
        <div className="flex flex-col items-start justify-start self-end mt-10 max-lg:m-0">
          <p>Satisfied Clients</p>
          <h3 className="mt-1 text-4xl font-bold">8.4M+</h3>
        </div>
        <div>
          <h2 className="font-bold text-4xl mt-6">
            We can bring life to everything you have envisioned and dreamed of.
          </h2>
          <p className="my-8">
            Our purpose is to transform your wildest dreams into reality.
            Regardless of how unconventional your vision may be, we possess the
            capacity to craft your dream home, fulfilling your every desire.
          </p>
          <Button label="See More" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
