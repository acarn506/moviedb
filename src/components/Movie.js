import React from 'react'
import  { useParams } from 'react-router-dom'

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config'

// Components
import Grid from './Grid'
import Spinner from './Spinner'
import BreadCrumb from './BreadCrumb'
import MovieInfo from './MovieInfo'

// Hook
import { useMovieFetch } from '../hooks/useMovieFetch'

// Image 
import NoImage from '../images/no_image.jpeg'

const Movie = () => {
    const { movieId } = useParams()
    const {state: movie, loading, error} = useMovieFetch(movieId)

    console.log('movie', movie)
    
    if (loading) return <Spinner/>
    if (error) return <div>Something went wrong...</div>

    return (
        <>
            <BreadCrumb movieTitle={movie.title}/>
            <MovieInfo movie={movie}/>
        </>
    )
}

export default Movie