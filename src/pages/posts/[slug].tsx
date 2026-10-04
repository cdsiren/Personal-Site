import Layout from '../../components/layout'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Footer from '../../components/footer'
import { getAllPosts, getPost, Post } from '../../lib/posts'

export default function PostPage({ post }: { post: Post }) {
  return (
    <Layout title={post.title} description={post.excerpt} image={post.coverImage} url={`https://cdurbin.xyz/posts/${post.slug}`}>
      <Header className="3xl:text-3xl 2xl:text-xl md:text-base text-sm fixed w-full bg-white p-8" title={post.title} />
      <div className="max-w-screen mx-auto p-8 w-full">
        <article className="3xl:mt-28 mt-18 sm:mt-12 mb-32">
          <PostHeader title={post.title} coverImage={post.coverImage} date={post.date} />
          <div className="markdown 3xl:max-w-6xl 3xl:text-3xl 2xl:text-xl text-base max-w-3xl mx-auto font-light pt-8" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </div>
      <Footer />
    </Layout>
  )
}

export const getStaticPaths = async () => ({
  paths: getAllPosts().map(({ slug }) => ({ params: { slug } })),
  fallback: false,
})

export const getStaticProps = async ({ params }: { params: { slug: string } }) => ({
  props: { post: getPost(params.slug) },
})
