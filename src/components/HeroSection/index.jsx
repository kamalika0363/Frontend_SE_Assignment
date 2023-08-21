
function Hero() {
  const card = [
    {
      img: "layers.svg", name: "Layers"
    },
    {
      img: "sisyphus.svg", name: "Sisyphus"
    },
    {
      img: "circooles.svg", name: "Circooles"
    },
    {
      img: "catalog.svg", name: "Catalog"
    },
    {
      img: "quotient.svg", name: "Quotient"
    }
  ]

  return (
    <section className="flex mx-2 md:mx-4 flex-col items-center gap-12 pt-24">
      <div className="top-container">
        <div className="badge-section text-xs m-auto text-[#6941C6] flex gap-3 pt-1 pr-1 pb-1 pl-1 rounded-2xl w-max items-center justify-center bg-gray-100">
          <p className="label-1 bg-white pl-1 pr-1 justify-start rounded-2xl">
            New feature
          </p>
          <div className="label-2 flex gap-1">
            <p>Checkout the team dashboard</p>
            <img src="HeroSection/arrow-right.svg" alt="arrow-right" />
          </div>
        </div>
        <div className="heading-section mt-3 flex flex-col gap-4 items-center">
          <h1 className="text-2xl md:text-4xl font-semibold text-center flex-wrap">
            Beautiful analytics to grow smarter
          </h1>
          <p className="text-gray-500 text-sm md:text-xs max-w-sm overflow-hidden text-center">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        <div className="btn-section flex justify-center gap-6 mt-8">
          <button className="flex px-1 md:px-2 items-center gap-2 border rounded-md">
            <img width={20} src="HeroSection/play-circle.svg" alt="play-circle" />
            Demo
          </button>
          <button className="px-2 md:px-3 rounded-md bg-[#7F56D9] p-2 text-gray-50">
            Sign up
          </button>
        </div>
      </div>
      <div className="bottom-container">
        <div className="img-section">
          <img
            className="lg:w-[90%] m-auto"
            src="HeroSection/Macbook-Pro-16-mockup.png"
            alt="mackbook"
          />
        </div>
        <p className="text-center text-sm mt-6 md:mt-10 text-gray-500">
          Join 4,000+ companies already growing
        </p>

        <div className="flex flex-col md:flex-row justify-between items-center md:mx-4 lg:mx-20 mt-8 mb-6 gap-8 md:gap-1">
          {/* <div className=" flex items-center gap-4 md:gap-2">
            <div className="img-part">
              <img
                className="md:w-7"
                width={40}
                src="HeroSection/layers.svg"
                alt=""
              />
            </div>
            <div className="text-part font-semibold text-2xl md:text-lg">
              Layers
            </div>
          </div>

          <div className=" flex items-center gap-4 md:gap-2">
            <div className="img-part">
              <img
                className="md:w-7"
                width={30}
                src="HeroSection/sisyphus.svg"
                alt=""
              />
            </div>
            <div className="text-part font-semibold text-2xl md:text-lg">
              Sisyphus
            </div>
          </div>
          <div className=" flex items-center gap-4 md:gap-2">
            <div className="img-part">
              <img
                className="md:w-7"
                width={40}
                src="HeroSection/circooles.svg"
                alt=""
              />
            </div>
            <div className="text-part font-semibold  text-2xl md:text-lg">
              Circooles
            </div>
          </div>
          <div className=" flex items-center gap-4 md:gap-2">
            <div className="img-part">
              <img
                className="md:w-7"
                width={40}
                src="HeroSection/catalog.svg"
                alt=""
              />
            </div>
            <div className="text-part font-semibold  text-2xl md:text-lg">
              Catalog
            </div>
          </div>
          <div className=" flex items-center gap-4 md:gap-2 company-5">
            <div className="img-part">
              <img
                className="md:w-8"
                width={40}
                src="HeroSection/quotient.svg"
                alt=""
              />
            </div>
            <div className="text-part font-semibold  text-2xl md:text-lg">
              Quotient
            </div>
          </div> */}
          
          {
            card.map((item, index) => (
              <div key={index} className=" flex items-center gap-4 md:gap-2">
                <div className="img-part">
                  <img
                    className="md:w-7"
                    width={40}
                    src={`HeroSection/${item.img}`}
                    alt=""
                  />
                </div>
                <div className="text-part font-semibold text-2xl md:text-lg">
                  {item.name}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Hero;
