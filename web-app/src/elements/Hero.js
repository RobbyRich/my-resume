import hero from '../img/hero.svg'
import HeroButton from './HeroButton'


function Hero() {

  return (
    <div class="pt-5">
      <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">

        <div class="flex flex-col w-full md:w-2/5 justify-center md:items-start text-center md:text-left">
          <p class="uppercase tracking-loose w-full text-lg">hello! my name is</p>
          <h1 class="my-4 text-5xl font-bold leading-tight">
            Robert Richards
          </h1>
          <p class="leading-normal text-2xl mb-8">
            I have been designing and developing end-to-end software solutions for 20 years.
          </p>
          <p class="leading-normal text-2xl mb-8">
            I am an experienced manager and team lead.
          </p>
            <HeroButton url="/contact" label="Contact me" />
        </div>

        <div class="w-full md:w-3/5 py-6 text-center">
          <img class="w-full md:w-4/5 z-50" alt="programmer" src={hero} />
        </div>
      </div>
    </div>
  );
}

export default Hero;