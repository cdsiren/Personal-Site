import ReadingPreview from './reading-preview'
import ReadingList from '../utils/reading-list';

const Readings = () => {
  return <div className={`p-8 w-full min-h-[83vh]`}>
    <div className="md:grid hidden grid-cols-5 font-light pb-4">
      <p>N°</p>
      <p>Title</p>
      <p>Author</p>
      <p>Topic</p>
      <p>Date</p>
    </div>
    <div>
      {ReadingList.map((article: any, i: number) => (
        <ReadingPreview
          index={i}
          key={article.slug}
          title={article.title}
          date={article.date}
          author={article.author}
          slug={article.slug}
          excerpt={article.excerpt} 
          topic={article.topic}
        />
      ))}
    </div>
  </div>
}

export default Readings;