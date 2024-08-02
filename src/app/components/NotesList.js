import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import styles from "./NotesList.module.scss"

async function getNotes() {
  const files = fs.readdirSync(path.join(process.cwd(), 'content/notes'))

  const notes = files.map(filename => {
    const slug = filename.replace('.md', '')
    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd(), 'content/notes', filename),
      'utf-8'
    )

    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      slug,
      frontMatter,
    }
  })

  return notes
}

export default async function NotesList() {
  const notes = await getNotes()

  return (
    <aside className={styles.toc}>
        <ul className={styles.list} role='navigation'>
        {notes.map(note => (
            <li key={note.slug} className={styles.list__item}>
            <Link href={`/notes/${note.slug}`}>
                {note.frontMatter.title}
            </Link>
            </li>
        ))}
        </ul>
    </aside>
  )
}