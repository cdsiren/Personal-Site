import readings from '../utils/reading-list'

export default function ReadingList() {
  return (
    <div className="p-8 w-full min-h-[83vh]">
      <div className="md:grid hidden grid-cols-6 font-light pb-4 font-medium">
        <p>N°</p>
        <p className="col-span-2">Title</p>
        <p>Author</p>
        <p>Topic</p>
        <p>Date</p>
      </div>
      {readings.map((r, i) => (
        <div key={r.slug}>
          <a href={r.slug} target="_blank" rel="noreferrer" className="grid-cols-6 items-center font-light 3xl:py-6 2xl:py-4 py-3 hover:text-orange-400 md:grid hidden">
            <p>{i + 1}</p>
            <p className="pr-6 col-span-2">{r.title}</p>
            <p>{r.author}</p>
            <p>{r.topic}</p>
            <p>{r.date}</p>
          </a>
          <div className="md:hidden flex justify-center font-light text-sm pb-8">
            <div>
              <a href={r.slug} target="_blank" rel="noreferrer" className="hover:underline">
                <p>N° {i + 1}. {r.title}</p>
                <div className="grid grid-cols-3 py-1">
                  <p>{r.author}</p>
                  <p className="text-center">{r.date}</p>
                  <p className="text-right">{r.topic}</p>
                </div>
              </a>
              <p>{r.excerpt}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
