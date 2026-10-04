import { useState } from 'react'
import Layout from '../components/layout'
import Intro from '../components/intro'
import Navbar from '../components/navbar'
import BlogPosts from '../components/blog-posts'
import About from '../components/about'
import ReadingList from '../components/reading-list'
import Footer from '../components/footer'
import { getAllPosts, Post } from '../lib/posts'

export type Tab = 'Work' | 'About' | 'Reading List'

export default function Index({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState<Tab>('Work')

  const content = {
    'Work': <BlogPosts posts={posts} />,
    'About': <About />,
    'Reading List': <ReadingList />,
  }

  const smoothScroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <Layout>
      <div className="relative">
        <div id="intro"><Intro /></div>
        <div className="absolute bottom-0 w-full">
          <Navbar active={active} setActive={setActive} smoothScroll={smoothScroll} />
        </div>
      </div>
      <div id={active} className="3xl:text-3xl">{content[active]}</div>
      <Footer />
    </Layout>
  )
}

export const getStaticProps = async () => ({ props: { posts: getAllPosts() } })
