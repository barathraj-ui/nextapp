import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/First.module.css";

export default function FirstPost() {
  return (
    <div>
      <Head>
        <title>Create First</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={styles.container}>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
        <Image
          src="/images/acs_banner_mob.jpg" // Route of the image file
          height={400} // Desired size with correct aspect ratio
          width={400} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </main>
    </div>
  );
}
