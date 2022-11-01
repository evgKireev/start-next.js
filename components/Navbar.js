import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
  const { pathname } = useRouter();
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <div className={styles.logo}>
          <Image src="/logo.png" width={70} height={70} alt="logo" />
        </div>
      </Link>
      <div className={styles.links}>
        <Link className={pathname === '/' ? styles.active : ''} href="/">
          Home
        </Link>
        <Link
          className={pathname === '/posts' ? styles.active : ''}
          href="/posts"
        >
          Posts
        </Link>
        <Link
          className={pathname === '/contacts' ? styles.active : ''}
          href="/contacts"
        >
          Contacts
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
