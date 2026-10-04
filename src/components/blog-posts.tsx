import Link from 'next/link'
import Image from 'next/image'
import type { Post } from '../lib/posts'

export default function BlogPosts({ posts }: { posts: Post[] }) {
  return (
    <div className="p-8 w-full min-h-[83vh]">
      <div className="md:grid hidden grid-cols-6 font-light pb-4 font-medium">
        <p>N°</p>
        <p className="col-span-2">Project</p>
        <p>Type</p>
        <p>Topic</p>
        <p>Date</p>
      </div>
      {posts.map((post, i) => (
        <Row key={post.slug} post={post} index={i} last={i === posts.length - 1} />
      ))}
      <p className="pt-16 font-light">Personal projects live at <Link href="https://prism.ing" target="_blank" rel="noreferrer" className="text-orange-400">prism.ing</Link>.</p>
    </div>
  )
}

function Row({ post, index, last }: { post: Post; index: number; last: boolean }) {
  const href = `/posts/${post.slug}`
  return (
    <>
      <Link href={href} className="relative group md:block hidden">
        <div className="grid grid-cols-6 items-center font-light 3xl:py-6 2xl:py-4 py-3 z-20 hover:text-orange-400 cursor-pointer">
          <p>{index + 1}</p>
          <p className="pr-6 col-span-2">{post.title}</p>
          <p>{post.type}</p>
          <p>{post.topic}</p>
          <p>{post.date}</p>
        </div>
        {!last && (
          <div className="absolute w-full z-10 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <Image src={post.coverImage} alt="" width={400} height={400} />
          </div>
        )}
      </Link>
      <Link href={href} className="md:hidden flex justify-center font-light text-sm pb-8">
        <div>
          <p>N° {index + 1}. {post.title}</p>
          <div className="grid grid-cols-3 py-1">
            <p>{post.type}</p>
            <p className="text-center">{post.date}</p>
            <p className="text-right">{post.topic}</p>
          </div>
          <div className="flex justify-center">
            <Image src={post.coverImage} alt="" width={400} height={400} />
          </div>
        </div>
      </Link>
    </>
  )
}
