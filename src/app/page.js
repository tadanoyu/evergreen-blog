import NotesList from "./components/NotesList";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.main}>
      <NotesList />
      {/* <div className={styles.content}>
        <h1>Content</h1>
      </div> */}
    </div>
  )
}