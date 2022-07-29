import Head from "next/head";
import About from "../src/components/About";
import Hero from "../src/components/Hero";
import Nav from "../src/components/Nav";
import styles from "../styles/Home.module.css";
import instagram from "./api/instagram";

// TODO 
// add images with api https://www.instagram.com/realskproductions/?__a=1&__d=dis
// add about text content
// add link hrefs

export async function getServerSideProps(context) {
  const data = await instagram.get()

  console.log(data)

  return {
    props: {}, // will be passed to the page component as props
  }
}


export default function Home() {
  const data = [
    { id: 1, src: "undefined", alt: "undefined alt" },
    { id: 2, src: "undefined", alt: "undefined alt" },
    { id: 3, src: "undefined", alt: "undefined alt" },
    { id: 4, src: "undefined", alt: "undefined alt" },
  ];

  const Item = (props) => <div className={styles.item}>{props.image.alt}</div>;

  return (
    <>
      <Head>
        <title>realskproductions</title>
        <meta name="description" content="Beat leasing by realskproductions" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
        <link rel="icon" href="/favicon-fill.ico" />
      </Head>
      <Hero title={"realskproductions - LDN"} />
      <Nav />
      <About />

      <div className={styles.gallery}>
        <h1>Gallery</h1>

        <div className={styles.itemList}>
          {data.map((image) => (
            <Item key={image.id} image={image} />
          ))}
        </div>
      </div>
    </>
  );
}
