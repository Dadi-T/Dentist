import Link from "next/link";
import Image from "next/image";
import DrawerComponent from "./Components/Drawer";
export default function Header() {
  return (
    <header className=" ">
      <nav className="flex  sm:items-center sm:justify-between justify-center ">
        <section className=" hidden sm:block">
          <button title="Services">
            <Link href="#services">
              <p className="uppercase inline">Services</p>
            </Link>
          </button>
          <button title="Contact">
            <Link href="#contact">
              <p className="inline ml-4 uppercase">Contact</p>
            </Link>
          </button>
        </section>
        <section className="block absolute left-1 top-3 sm:hidden self-center ">
          <DrawerComponent />
        </section>
        <section className="flex flex-col items-center my-5">
          <h1 className="text-main">John Doe</h1>
          <h2 className="font-normal">Dentist</h2>
        </section>
        <section className=" hidden sm:block">
          <button title="Doctors">
            <Link href="#doctors">
              <p className="uppercase inline">Doctors</p>
            </Link>
          </button>
          <button title="Location">
            <Link href="#location">
              <p className="inline ml-4 uppercase">Location</p>
            </Link>
          </button>
        </section>
      </nav>
    </header>
  );
}
