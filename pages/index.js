import Head from "next/head";
import Image from "next/image";
import About from "../src/components/About";
import Gallery from "../src/components/Gallery";
import Hero from "../src/components/Hero";
import Nav from "../src/components/Nav";
import styles from "../styles/Home.module.css";

// TODO
// change api token to sk's via meta for developers aka insta inv and login
// add about me text content
// add youtube social and possible api? https://www.youtube.com/channel/UCwdTrf45fyXB_Bhpn0V-Alg  
// move buttons away from logo in hero
// change instagram post size
// add beatstars to contact list

export default function Home() {
  return (
    <>
      <Head>
        <title>realskproductions - beat leasing and studio time</title>
        <meta name="description" content="realskproductions - breat leasing and studio time website built in nextjs" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
        <link rel="icon" href="/favicon-fill.ico" />
      </Head>
      <Hero title={"realskproductions"} />
      <Nav />

      <div className={styles.container}>
        <About text={"Young music producer and engineer based in London. I've been producing since 2015 and engineering since 2018, I've worked with various artists ranging from R&B singers and drill rappers. I provide instrumental leasings"} />

        <Gallery title={'Songs'} items={8} />

        <div className={styles.map} id="map">
          <h1>Map // Loco</h1>

          <div className={styles.mapBox}>
            <Image
              src={"/sklogo.png"}
              width={1250}
              height={600}
              alt="site logo"
            />

            <div>
              <h1> Studio time offered soon! </h1>
            </div>
          </div>
        </div>

        <div className="footer">

        </div>

      </div>
    </>
  );
}
