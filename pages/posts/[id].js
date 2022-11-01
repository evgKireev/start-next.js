import Head from 'next/head';

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  console.log(data);
  const paths = data.map(({ id }) => ({
    params: {
      id: id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  if (!data) {
    return { noFound: true };
  }

  return {
    props: {
      post: data,
    },
  };
};

const Post = ({ post }) => {
  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      <div>
        <h1>Post</h1>
        <h2>{post.title}</h2>
        <h5>{post.body}</h5>
      </div>
    </>
  );
};
export default Post;
