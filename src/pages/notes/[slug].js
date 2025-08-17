import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import styles from "./notes.module.scss"

export default function Note({ frontMatter, content }) {
  return (
    <div className={`${styles.post}`}>
      <div className={styles.post__header}>
        <h1>
          {frontMatter.title}
        </h1>
        <div className={styles.date}>
          {frontMatter.date}
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: content }}/>
    </div>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('content/notes'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join('content/notes', slug + '.md'), 'utf-8')

  const { data: frontMatter, content } = matter(markdownWithMeta)
  const processedContent = await remark()
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()

  return {
    props: {
      frontMatter,
      slug,
      content: contentHtml
    }
  }
}