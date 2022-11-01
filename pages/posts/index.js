import Head from 'next/head';
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { posts: data },
  };
};

const Posts = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts:</title>
      </Head>
      <ul>
        {posts &&
          posts.map((post) => (
            <Link href={`/posts/${post.id}`} key={post.id}>
              <li style={{ marginTop: 20, fontWeight: 800 }}>{post.title}</li>
            </Link>
          ))}
      </ul>
    </>
  );
};
export default Posts;
