import styles from '../styles/404.module.scss';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
const Error = () => {
  const rout = useRouter();
  useEffect(() => {
    setTimeout(() => {
      rout.push('/');
    }, 3000);
  }, [rout]);

  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <div className={styles.wrapper}>
        <h1>
          404 <br />
          Something is going wrong...
        </h1>
      </div>
    </>
  );
};
export default Error;
