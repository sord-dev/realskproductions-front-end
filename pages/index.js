import Head from "next/head";
import Image from "next/image";
import About from "../src/components/About";
import Gallery from "../src/components/Gallery";
import Hero from "../src/components/Hero";
import Map from "../src/components/Map";
import Nav from "../src/components/Nav";
import SocialsList from "../src/components/SocialsList";
import styles from "../styles/Home.module.css";

// TODO
// improve about me text content
// add youtube social and possible api? https://www.youtube.com/channel/UCwdTrf45fyXB_Bhpn0V-Alg
// add beatstars to contact list
// move buttons away from logo in hero
// modularise contactlist

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

        <Gallery title={"Songs"} items={8} />

        <Map notice="Studio time offered soon!" />

      </div>

      <div className={styles.footer}>

      <div className={`${styles.container} ${styles.center}`}>

      <div>
        <SocialsList />
      </div>

      <p> &copy; realskproductions</p>


      </div>


      </div>
    </>
  );
}
