import HeroBook from "../../assets/image/herobook.png";
const Hero = () => {
  return (
    <div className="hero h-[600px] bg-base-200 container mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={HeroBook}
          alt="sincerely-media-CXYPfveiuis-unsplash"
          className="lg:max-w-sm rounded-lg"
        />
        <div className=" space-y-5">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Books to freshen up <br /> your bookshelf
          </h1>
          <button className="btn bg-lime-500 font-bold text-white">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
