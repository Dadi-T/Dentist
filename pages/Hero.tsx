import Image from "next/image";
import HeroImage from "../public/Hero-picture.png";
import Link from "next/link";
export default function Hero() {
  return (
    <main className="flex flex-col  lg:flex  sm:flex-row   mx-0 ">
      <section className=" flex flex-col items-center sm:block sm:self-center sm:w-1/2 md:w-3/4 ">
        <h1 className="lg:text-4xl md:text-2xl ">
          A <span className="text-main">better Life</span>, starts with a
          beautiful <span className="text-main">smile</span>
        </h1>
        <h3 className="lg:text-xl lg:mt-4 md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </h3>
        <button
          className="bg-main rounded-xl mt-4 mb-16 sm:mb-0 "
          title="Make an Appointment"
        >
          <Link href="#Appointment" as="Link appointment">
            <p className="lg:px-8 lg:py-3 px-6 py-2 text-buttonText">
              Make an Appointment
            </p>
          </Link>
        </button>
      </section>
      <section className="hidden sm:block sm:relative top-2 ">
        <Image
          src={HeroImage}
          alt="girl smiling and her teeth are showing up"
        />
      </section>
    </main>
  );
}
