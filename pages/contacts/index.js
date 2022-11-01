import Head from 'next/head';
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { contacts: data },
  };
};

const Contacts = ({ contacts }) => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <div>
        <h1>Contacts List:</h1>
        <ul>
          {contacts &&
            contacts.map((contact) => (
              <Link href={`/contacts/${contact.id}`} key={contact.id}>
                <li style={{ marginTop: 20 }}>
                  <strong>{contact.name}</strong> ({contact.email})
                </li>
              </Link>
            ))}
        </ul>
      </div>
    </>
  );
};
export default Contacts;
