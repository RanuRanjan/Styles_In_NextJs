import styles from "./page.module.css";
import heading from '@/app/style/heading.module.css'
import style from '@/app/style/heading.module.css'
export default function Home() {
  const {red} =style
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1> Welcome to my website</h1>
        <h2 className={heading.main}>Learning NextJs</h2>
        <h3 className={red}>from Youtube</h3>
      </main>
    </div>
  );
}
