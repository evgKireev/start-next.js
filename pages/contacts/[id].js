import Head from 'next/head';


export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { contact: data },
  };
};

const Contact = ({ contact }) => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div>
        <h1>{contact.name}</h1>
        <h3>Email: {contact.email}</h3>
        <h3>
          Adress:{' '}
          {`${contact.address.city}, ${contact.address.street}, ${contact.address.suite}`}
        </h3>
      </div>
    </>
  );
};
export default Contact;
