import Image from "next/image";

//interfaces
import { service } from "../../Interfaces/interfaces";

export default function Service({ service }: { service: service }) {
  return (
    <>
      {service && (
        <div
          className="sm:rounded-2xl sm:border-black sm:border flex flex-col items-center sm:justify-center 
    md:my-4 md:px-2 
    flex-services-phones sm:flex-services-tablet lg:flex-services"
        >
          <section className="bg-shade p-4 rounded-full sm:self-start md:services">
            <Image
              src={service ? service.icon : null}
              alt="service icon"
              width={60}
              height={60}
            />
          </section>
          <h2 className=" mb-4 sm:mb-0 md:services sm:self-start font-bold text-main">
            {service ? service.name : null}
          </h2>
          <p className="md:services hidden sm:block">
            {service ? service.description : null}
          </p>
        </div>
      )}
    </>
  );
}
