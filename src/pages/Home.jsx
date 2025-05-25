import { useState, useEffect } from "react"
import { getPopularMovies, searchMovies } from "../services/api"

import "../css/Home.css"
import TitleCards from "../components/TitleCards"

export default function Home() {

    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err)
                setError("Failed to fulfill the duties..")
            } finally {
                setLoading(false)
            }
        }
        loadPopularMovies()
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault()
        // if the user just hits the spacebar
        if (!searchQuery.trim()) return
        // if the page is already loading we don't want to load any more
        if (loading) return
        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (err) {
            console.log(err)
            setError("Failed to search movies...")
        } finally {
            setLoading(false)
        }

    }

    return (
        <>
            <form action="" onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="submit-button">Search 🔎</button>
            </form>
            {error && <div className="error">{error}</div>}
            {loading ? <div className="loading">Loading...</div> :
                <div className="movies-grid">
                    {movies.map((movie) => (
                        // movie.title.toLowerCase().startsWith(searchQuery) &&
                        <TitleCards movie={movie} key={movie.id} />
                    ))}
                </div>
            }

        </>
    )
}