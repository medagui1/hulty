import Button from "../components/Button";
import wide_shoot from '../assets/wide_shoot.webp'

const Hero = () => {
  return (
    <div className="flex gap-8 max-lg:flex-col-reverse justify-center mt-8">
      <div className="max-lg:flex-row gap-8 max-sm:flex-col flex flex-col">
        <div className="flex-1 max-w-lg rounded-[30px] p-10 flex flex-col justify-start items-start bg-primary">
          <p>Capital raised</p>
          <h1 className="mt-2 text-4xl font-bold">$3.5M+</h1>
          <p className="text-start mt-2 leading-normal"> 
            Crafted for your comfort, to enhance the beauty of your present
            lifestyle but also paves the way for a more aesthetically pleasing
            and harmonious future for both you and your cheriched family.
          </p>
        </div>
        <div className="flex-1 max-w-lg rounded-[30px] p-10 flex flex-col justify-start items-start bg-primary">
          <h4 className="">Introduction</h4>
          <p className="mt-2 mb-4 text-2xl text-start font-semibold">A vision for liveable, sustainable & affordable.</p>
          <Button label='Start Exploring'/>
        </div>
      </div>
      <div className="flex flex-col bg-primary rounded-[30px] gap-6">
        <h1 className="text-start text-7xl mx-8 mt-8 font-bold max-sm:text-6xl">
          We craft the future dwelling.
        </h1>
        <div>
          <img src={wide_shoot} alt="" />
        </div>

      </div>
    </div>
  );
};

export default Hero;
