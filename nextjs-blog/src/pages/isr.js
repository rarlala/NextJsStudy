import Head from "next/head";

export async function getStaticProps() {
  console.log("server에서 동작");
  return {
    props: {
      time: new Date().toISOString(),
    },
    revalidate: 1,
  };
}

export default function SSG({ time }) {
  return (
    <div className="container">
      <Head>
        <title>SSG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">{time}</h1>
      </main>
    </div>
  );
}
