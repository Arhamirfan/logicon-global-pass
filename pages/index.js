import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Global Pass</title>
        <meta name="description" content="Global Pass" />
      </Head>

      <main>
        <div>
          <h2>Global Pass</h2>
        </div>
      </main>
    </div>
  );
}
