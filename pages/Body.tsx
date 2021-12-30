import Service from "./Components/Service";
import Braces from "./Services/Braces.svg";
import Care from "./Services/dental-care.svg";
import Cleaning from "./Services/Cleaning.svg";
import Health from "./Services/Health.svg";
import Prosthetics from "./Services/prosthetics.svg";
import Whitening from "./Services/Whitening.svg";

import Image from "next/image";
import Link from "next/link";
//interface
import { service } from "../Interfaces/interfaces";

export default function Body() {
  const services: service[] = [
    {
      name: "Prosthetics",
      description:
        "pellentesque habitant morbi tristique senectus et netus. Iaculis nunc sed augue lacus viverra. Pretium fusce id velit ut. Convallis",
      icon: Prosthetics,
    },
    {
      name: "Braces",
      description:
        "pellentesque habitant morbi tristique senectus et netus. Iaculis nunc sed augue lacus viverra. Pretium fusce id velit ut. Convallis",
      icon: Braces,
    },
    {
      name: "Cleaning",
      description:
        "pellentesque habitant morbi tristique senectus et netus. Iaculis nunc sed augue lacus viverra. Pretium fusce id velit ut. Convallis",
      icon: Cleaning,
    },
    {
      name: "Whitening",
      description:
        "pellentesque habitant morbi tristique senectus et netus. Iaculis nunc sed augue lacus viverra. Pretium fusce id velit ut. Convallis",
      icon: Whitening,
    },
    {
      name: "Check up",
      description:
        "pellentesque habitant morbi tristique senectus et netus. Iaculis nunc sed augue lacus viverra. Pretium fusce id velit ut. Convallis",
      icon: Care,
    },
    {
      name: "Health",
      description:
        "pellentesque habitant morbi tristique senectus et netus. Iaculis nunc sed augue lacus viverra. Pretium fusce id velit ut. Convallis",
      icon: Health,
    },
  ];

  //sm:mx-auto grid lg:grid-cols-3 lg:gap-4 lg:max-w-5xl md:grid-cols-2 md:gap-16
  return (
    <div className="">
      <h1 className="text-main my-8 text-center">Services</h1>
      <section className="flex flex-col sm:flex-row  sm:flex-wrap sm:justify-between">
        {services.map((service: service) => {
          return <Service key={service.name} service={service} />;
        })}
      </section>
      <h1 className="text-main my-8 text-center">Find Us</h1>
      <section className="grid lg:grid-cols-2 gap-16 ">
        <Image
          src="/Map/Map.png"
          alt="map that has location of the dentist"
          width={552}
          height={465}
          layout="responsive"
        />
        <div className="flex justify-center flex-col ">
          <p className="mb-16">Lorem,</p>
          <p className="mb-16">
            Viverra suspendisse potenti nullam ac tortor vitae purus faucibus
            ornare. Dignissim cras tincidunt lobortis feugiat vivamus at augue
            eget. Turpis egestas sed tempus urna et pharetra pharetra massa.
            Euismod nisi porta lorem mollis. Est ultricies integer quis auctor
            elit sed vulputate.
          </p>
          <button
            className="lg:self-start bg-main rounded-xl self-center"
            title="Find the dentist in google maps"
          >
            <Link href="#map">
              <p className="text-[#FFFFFF] px-10 py-3  ">
                Find us in google maps
              </p>
            </Link>
          </button>
        </div>
      </section>
    </div>
  );
}
