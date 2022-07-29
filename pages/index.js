import Head from "next/head";;
import About from "../src/components/About";
import Gallery from "../src/components/Gallery";
import Hero from "../src/components/Hero";
import Nav from "../src/components/Nav";
import styles from "../styles/Home.module.css";
// TODO
// change api token to sk's
// add about text content
// title styles

export default function Home() {

  return (
    <>
      <Head>
        <title>realskproductions - beat leasing</title>
        <meta name="description" content="Beat leasing by realskproductions" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
        <link rel="icon" href="/favicon-fill.ico" />
      </Head>
      <Hero title={"realskproductions"} />
      <Nav />
      <About />

      <Gallery />

      <div className={styles.map} id='map'>

        <h1>Map // Loco</h1>

        </div>
    </>
  );
}
