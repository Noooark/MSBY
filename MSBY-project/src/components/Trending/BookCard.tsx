import { Book } from "./booksData";

const BookCard =({book}: {book: Book}) => {
    const {src,title,main} = book 
    return <div className="card">
        <img src={src} className="w-full"/>
        <div className="p-4 text-white">
            <p className="text-2xl">{title}</p>
            <p>{main}</p>
        </div>
    </div>
}

export default BookCard