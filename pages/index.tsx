import type { NextPage } from "next";
import Header from "./Header";
import Hero from "./Hero";
import Body from "./Body";
import Footer from "./Footer";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        {/* SEO Stuff */}
        <title>Dentist John Doe</title>
        <meta
          name="description"
          content="The Best dentist to help you with cleaning health check up prosthetics whitening braces teeth in California"
        />
        <meta
          name="keywords"
          content="Dentist,Whitening,health,check up,prosthetics,braces,teeth,california,John Doe"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="John Doe Dentist" />
        <meta charSet="UTF-8" />
        <link rel="shortcut icon" type="image/ico" href="/Logos/favicon.ico" />
        <meta name="robots" content="index" />
      </Head>

      {/* End of SEO Stuff */}

      <div className="bg-background ">
        <div className="lg:px-16 md:px-8 px-4">
          <Header />
          <Hero />
        </div>
      </div>
      <div className="lg:px-16 md:px-8 px-4">
        <Body />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
