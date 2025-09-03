const Hero = () => {
  return (
    <main
      className="sm:grid sm:bg-Gray-50 grid-cols-2 flex flex-col-reverse items-center gap-x-22 mx-auto max-w-[900px]"
    >
      <div>
        <h1 className="sm:text-6xl text-3xl sm:text-left text-center font-bold mt-12 text-Gray-950">
          Make remote work
        </h1>
        <p className="sm:mt-12 sm:mb-10 sm:text-left text-center sm:px-0 px-4">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button
          type="button"
          className="bg-Gray-950 text-white transition-all hover:bg-white hover:text-Gray-950 sm:font-semibold mx-auto sm:mx-0 mt-4 sm:mt-0 block cursor-pointer border-[1.5px] border-Gray-950 rounded-xl px-4 sm:py-3 py-2"
        >
          Learn more
        </button>
        <div className="grid grid-cols-4 gap-x-2 sm:mt-20 mt-10">
          <img src="/client-databiz.svg" alt="" />
          <img src="/client-audiophile.svg" alt="" />
          <img src="/client-meet.svg" alt="" />
          <img src="/client-maker.svg" alt="" />
        </div>
      </div>
      <div>
        <img
          className="sm:block max-w-full hidden"
          src="/image-hero-desktop.png"
          alt=""
        />
        <img
          className="sm:hidden block max-w-full"
          src="/image-hero-mobile.png"
          alt=""
        />
      </div>
    </main>
  );
};

export default Hero;
