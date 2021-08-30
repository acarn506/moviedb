import { useState, useEffect } from "react";
import API from '../API'

// Helpers 
import { isPersistanceState } from "../helpers";

export const useMovieFetch = movieId => {
    const [state, setState] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect( () => {

        const fetchMovie = async () => {
            try {
                setLoading(true)
                setError(false)
    
                const movie = await API.fetchMovie(movieId)
                const credits = await API.fetchCredits(movieId)
    
                // Get directors only
                const directors = credits.crew.filter( member => 
                    member.job === 'Director'
                )
    
                setState({
                    ...movie,
                    actors : credits.cast,
                    directors : directors
                })
    
                setLoading(false)
    
            } catch (error) {
                setError(true)
            }
    
        }

        const sessionState = isPersistanceState(movieId)

        if (sessionState) {
            setState(sessionState)
            setLoading(false)
            return 
        }
      
        fetchMovie()
        
    }, [movieId])

    // Write to SessionStorage
    useEffect(() => {
        sessionStorage.setItem(movieId, JSON.stringify(state))
    }, [movieId, state])

    return { state, loading, error}

}