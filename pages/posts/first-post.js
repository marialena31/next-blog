import Head from 'next/head'

export async function getStaticProps() {
  return {
    props: {
      post: {
        title: 'First Post',
        body: 'My First Post, as static props.',
      }
    },
  };
}

const FirstPostPage = ({ post }) => {
  return (
    <>
        <Head>
            <title>{post.title} - My Blog</title>
        </Head>
        <main>
            <h1>{post.title}</h1>
            <p>
              {post.body}
            </p>
        </main>
    </>
  )
}

export default FirstPostPage