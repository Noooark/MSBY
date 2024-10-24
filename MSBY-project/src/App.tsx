import './App.css'
import AuthButton from './components/AuthButton'
import Ender from './components/Ender'
import Header from './components/Header'
import Nav from './components/Nav'
import Trending from './components/Trending'

function App() {
    return (
        <div className='grid md:grid-cols-5'>
            <Nav />
            <main className='md:col-span-4 px-12 py-6 bg-cyan-50'>
                <AuthButton />
                <Header />
                <Trending />
            </main>
            <footer className='px-12 py-6 bg-cyan-50 col-span-5'>
                <Ender />
            </footer>
        </div>
    )
}

export default App
