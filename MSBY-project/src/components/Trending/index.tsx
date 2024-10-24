import BookCard from "./BookCard"
import { booksData } from "./booksData"

const index = () => {
  return (
    <><p className="border-b border-primary mt-12 mb-6 pb-4 text-xl">Trending</p>
    <div className="grid md:grid-cols-4 gap-10 mb-12 grid-cols-2">
      {booksData.map((book, index) => (<BookCard key={index} book={book}/>))}
    </div>
    <div className="flex justify-center">
      <button className="btn hover:scale-110 transition ease-out duration-200">Load More</button>
    </div>
    </>
  )
}

export default index