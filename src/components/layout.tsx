import Head from 'next/head'

type Props = {
  title?: string
  description?: string
  image?: string
  url?: string
  children: React.ReactNode
}

export default function Layout({
  title = 'Charlie Work',
  description = "Charlie's personal site.",
  image = '/pfp.png',
  url = 'https://cdurbin.xyz',
  children,
}: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="initial-scale=0.6, width=500" />
        <link rel="icon" href="/pfp.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
      <main className="min-h-screen relative m:bg-black m:text-white">{children}</main>
    </>
  )
}
