import Link from "next/link";
import Image from "next/image";
import Icon from "@mui/material/Icon";
//icons
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
export default function Footer() {
  return (
    <footer>
      <hr className="mt-10 mb-4 border-y-1 border-[#c4c4c4]" />
      <div className="flex flex-col-reverse items-center sm:flex-row sm:justify-between mb-10">
        {/* FIXME: Make the logo an image by fixing the layout or Write it down as normal html ? */}
        <button title="Home page">
          <Link href="" scroll={true}>
            <Image
              src="/Logo.png"
              alt="Logo in footer area"
              width={232}
              height={110}
            />
          </Link>
        </button>
        <section className="hidden sm:block">
          <h2>Explore</h2>
          <nav className="flex flex-col">
            <Link href="#services">
              <p className="text-[#575757]">Services</p>
            </Link>
            <Link href="#doctors">
              <p className="text-[#575757]">Doctors</p>
            </Link>
            <Link href="#contact">
              <p className="text-[#575757]">Contact</p>
            </Link>
            <Link href="#location">
              <p className="text-[#575757]">Location</p>
            </Link>
          </nav>
        </section>
        <section className="">
          <h2>Connect with us</h2>
          <nav className="flex justify-between">
            <button title="Facebook page">
              <Link href="#facebook">
                <FacebookRoundedIcon sx={{ color: "#4267B2" }} />
              </Link>
            </button>
            <button title="Instagram page">
              {/* TODO: Add Instagram icon with colors */}
              <Link href="#instagram">
                <InstagramIcon />
              </Link>
            </button>
            <button title="LinkedIn page">
              <Link href="#linkedIn">
                <LinkedInIcon sx={{ color: "#0077b5" }} />
              </Link>
            </button>
            <button title="Twitter page">
              <Link href="#Twitter">
                <TwitterIcon sx={{ color: "#1DA1F2" }} />
              </Link>
            </button>
          </nav>
          <p className="text-[#575757]">+xxx xxxx xxxx</p>
        </section>
      </div>
    </footer>
  );
}
