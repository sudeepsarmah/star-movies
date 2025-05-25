import { useState } from "react"
import { useMovieContext } from "../contexts/MovieContext"
import '../css/TitleCard.css'


export default function TitleCards({ movie }) {

    const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext()
    const favorite = isFavorite(movie.id)


    const favoriteApplied = (e) => {
        e.preventDefault()
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }
    return (
        <>
            <div className="movie-card">
                <div className="movie-poster">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                </div>
                <div className="movie-info">
                    <h1>{movie.title}</h1>
                    <h3>{movie.rating}</h3>
                    <h4>{movie.release_date?.split("-")[0]}</h4>
                    {/* <span><a href="">{movie.themes}</a></span>
                    <span>{movie.actors}</span> */}
                    <p>{movie.description}</p>
                </div>
                <div >
                    <button className={`favorite-btn
                        ${favorite ? "active" : ""}`}
                        onClick={favoriteApplied}>
                        {isFavorite ? "Favorite" : "Add to Favorites"}
                    </button>
                    {/* <button className={!isFavorite ? "watched-on" : "watched-off"} onClick={watchedApplied}>
                        {isWatched ? "Watched" : "To be watched"}
                    </button> */}
                </div>
            </div>
        </>
    )
}