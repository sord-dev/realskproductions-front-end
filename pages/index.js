import Head from "next/head";
import Image from "next/image";
import About from "../src/components/About";
import Gallery from "../src/components/Gallery";
import Hero from "../src/components/Hero";
import Nav from "../src/components/Nav";
import styles from "../styles/Home.module.css";

// TODO
// change api token to sk's
// add about text content
// change font and typography

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
        <About />

        <Gallery />

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
      </div>
    </>
  );
}
