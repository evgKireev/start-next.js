import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Image from 'next/image';
const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.container}>
        <h1>Start Next.js Application</h1>
        <div>
          <Image src="/next.png" alt="next.js" width={508} height={263} />
        </div>
      </div>
    </>
  );
};
export default Home;
