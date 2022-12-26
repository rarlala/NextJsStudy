import styles from "../styles/Home.module.css";
import Link from "next/link";

export async function getServerSideProps() {
  console.log("server에서 동작");
  return {
    props: { time: new Date().toISOString() },
  };
}

export default function Home({ time }) {
  return (
    <main>
      <h1 className={styles.title}>{time}</h1>
      <Link href="/csr">CSR로 이동</Link>
      <Link href="/ssg">SSG로 이동</Link>
      <Link href="/isr">ISR로 이동</Link>
    </main>
  );
}
