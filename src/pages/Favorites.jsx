import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import TitleCards from "../components/TitleCards"

export default function Favorites() {

    const { favorites } = useMovieContext()

    if (favorites) {
        return (
            <div>
                <h2>Your Favorite Movies</h2>
                <div className="movies-grid">
                    {favorites.map((movie) => (
                        <TitleCards movie={movie} key={movie.id}></TitleCards>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <>
            <h2>No favorite movies here yet!</h2>
            <p>Please add movies to your favorites list for them to appear here</p>
        </>
    )
}