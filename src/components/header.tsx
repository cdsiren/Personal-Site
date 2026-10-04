import Link from 'next/link'
import Image from 'next/image'

export default function Header({ title, className }: { title: string; className: string }) {
  return (
    <div className={`${className} flex flex-wrap items-center`}>
      <Link href="/" className="font-thin flex items-center">
        [ C , <span className="px-1"><Image src="/favicon/favi.png" height={18} width={18} alt="logo" /></span> ]
      </Link>
      <h2 className="font-light px-0 sm:px-4">
        <Link href="/" className="hover:text-white hover:bg-black">{'>> '}Home</Link> / Posts / <span className="bg-black text-white">{title}</span>.
      </h2>
    </div>
  )
}
