import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

export type Post = {
  slug: string
  title: string
  coverImage: string
  date: string
  type: string
  topic: string
  excerpt: string
  content?: string
}

const dir = join(process.cwd(), '_posts')

function read(file: string) {
  const { data, content } = matter(fs.readFileSync(join(dir, file), 'utf8'))
  const { title, coverImage, date, type, topic, excerpt } = data
  return { slug: file.replace(/\.md$/, ''), title, coverImage, date, type, topic, excerpt, content }
}

const sortKey = (date: string) => { const [m, d, y] = date.split('.'); return y + m + d }

export function getAllPosts(): Post[] {
  return fs.readdirSync(dir)
    .map(file => { const { content, ...post } = read(file); return post })
    .sort((a, b) => sortKey(b.date).localeCompare(sortKey(a.date)))
}

export function getPost(slug: string): Post {
  const { content, ...post } = read(`${slug}.md`)
  return { ...post, content: marked.parse(content) as string }
}
