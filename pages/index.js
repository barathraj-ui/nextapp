import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Read{" "}
          <Link href="/posts/FirstPost">
            <a>this page!</a>
          </Link>
        </h1>
      </main>
    </div>
  );
}
