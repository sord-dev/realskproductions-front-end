import Head from "next/head";
import About from "../src/components/About";
import Footer from "../src/components/Footer";
import Gallery from "../src/components/Gallery";
import Hero from "../src/components/Hero";
import Map from "../src/components/Map";
import Nav from "../src/components/Nav";
import styles from "../styles/Home.module.css";

// TODO
// improve about me text content
// possible youtube api link? https://www.youtube.com/channel/UCwdTrf45fyXB_Bhpn0V-Alg
// move buttons away from logo in hero

export default function Home() {
  return (
    <>
      <Head>
        <title>realskproductions - beat leasing and studio time</title>
        <meta
          name="description"
          content="realskproductions - breat leasing and studio time website built in nextjs"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
        <link rel="icon" href="/favicon-fill.ico" />
      </Head>

      <Hero
        title={"realskproductions"}
        heroLogo={"/sklogo.png"}
        ctaButton={"Buy Beats now"}
        secondaryButton={"Contact"}
      />

      <Nav />

      <div className={styles.container}>
        <About
          text={
            "Young music producer and engineer based in London. I've been producing since 2015 and engineering since 2018, I've worked with various artists ranging from R&B singers and drill rappers. I provide instrumental leasings"
          }
        />

        <Gallery title={"Songs"} items={7} />

        <Map notice="Studio time offered soon!" />
      </div>

      <Footer />
    </>
  );
}
