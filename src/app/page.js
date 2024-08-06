import NotesList from "./components/NotesList";
import styles from "./page.module.scss";

export default function Home() {
  
  return (
    <div className={`${styles.main}`}>
      <NotesList />
    </div>
  )
}