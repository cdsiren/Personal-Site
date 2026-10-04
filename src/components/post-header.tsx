import Image from 'next/image'

export default function PostHeader({ title, coverImage, date }: { title: string; coverImage: string; date: string }) {
  return (
    <>
      <h1 className="font-light tracking-wider 3xl:text-[130px] text-[60px] 3xl:max-w-6xl max-w-3xl mx-auto">{title}</h1>
      <div className="3xl:max-w-6xl 3xl:mt-16 mt-12 max-w-3xl mb-8 md:mb-16 mx-auto flex justify-center">
        <Image src={coverImage} alt="" width={500} height={500} />
      </div>
      <p className="3xl:max-w-6xl max-w-3xl mx-auto">{date}</p>
    </>
  )
}
