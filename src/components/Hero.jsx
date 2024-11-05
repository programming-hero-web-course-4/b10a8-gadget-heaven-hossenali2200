import React from 'react';

const image = "https://i.postimg.cc/5y3b095r/banner.jpg"

const Hero = () => {
  return (
    <div>
      <section className="bg-purple-600 lg:h-[600px] h-[400px] relative">
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
          <div className="flex w-full mx-auto text-left">
            <div className="relative inline-flex items-center mx-auto align-middle">
              <div className="text-center">
                <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-white md:text-5xl lg:text-6xl lg:max-w-7xl">
                  Upgrade Your Tech Accessories with <br /> Gadget Heaven Accessories
                </h1>
                <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-white">
                  Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                  <div className="mt-3 rounded-lg sm:mt-0">
                    <button className="px-5 py-3 text-base font-semibold text-center text-purple-600 transition duration-500 ease-in-out transform bg-white lg:px-10 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center absolute lg:top-[300px] top-[250px] lg:h-[500px] lg:w-[1300px] mt-24">
          <img
            src={image}
            className="w-10/12 mx-auto border-2 border-white p-6 rounded-3xl"
            alt="Banner"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
