import Container from '../../components/container';
import Header from '../../components/header';
import PostHeader from '../../components/blog-posts/post-header';
import Layout from '../../components/layout';
import { getBlogBySlug } from '../../lib/sanity/getPosts';
import PostTitle from '../../components/blog-posts/post-title';
import { PortableText } from '@portabletext/react';
import components from '../../lib/sanity/renderComponents';
import { SanityPost } from '../../utils/types';
import Footer from '../../components/footer';
import Meta from "../../components/meta";
import { GetServerSideProps } from 'next';
import { getImageUrl } from '../../lib/sanity/getImageUrl';
import { formatIsoDate } from '../../lib/formats/formatDate';

type Props = {
  post: SanityPost;
}

export default function Post({ post }: Props) {
  const title = `${post.title}`;

  const description = post.body
    .map((block: any) => {
      if (block._type === 'block' && block.children) {
        return block.children.map((child: any) => {
          if (child._type === 'span' && 'text' in child) {
            return child.text;
          }
          return '';
        }).join(' ');
      }
      return '';
    })
    .join(' ');

  return (
    <>
      <Layout>
        <Header className="3xl:text-3xl 2xl:text-xl md:text-base text-sm fixed w-full bg-white p-8" title={post.title} />
        <Container>
          <div className="3xl:mt-28 mt-18 sm:mt-12">
            {!post ? (
              <PostTitle>Loading…</PostTitle>
            ) : (
              <>
                <article className="mb-32">
                  <Meta title={title} description={description} url={`https://cdurbin.xyz/posts/${post.slug.current}`} image={getImageUrl(post.mainImage.asset._ref)} />
                  <PostHeader
                    className="3xl:max-w-6xl 3xl:mt-16 mt-12 max-w-3xl"
                    title={title}
                    coverImage={getImageUrl(post.mainImage.asset._ref)}
                    date={formatIsoDate(String(post.publishedAt))}
                  />
                  <div className="3xl:max-w-6xl 3xl:text-3xl 2xl:text-xl text-base max-w-3xl mx-auto font-light pt-8">
                    <PortableText value={post.body} components={components as any} />
                  </div>
                </article>
              </>
            )}
          </div>
        </Container>
        <Footer className="3xl:text-3xl text-sm" />
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params;
  const post = await getBlogBySlug(String(slug));
  
  return {
    props: {
      post
    }
  };
};
