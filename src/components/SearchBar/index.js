import React, { useState, useEffect, useRef } from 'react'

// Image
import searchIcon from '../../images/search-icon.svg'

// Styles 
import { Wrapper, Content } from './SearchBar.styles'

const SearchBar = ({ setSearchTerm }) => {
    const [state, setState] = useState('')
    const inital = useRef(true)

    useEffect( () => {

        if (inital.current) {            
            inital.current = false
            return
        }
        const timer = setTimeout(() => {
            setSearchTerm(state)
        }, 1000)

        return () => clearTimeout(timer)

    }, [setSearchTerm, state])

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt={'search-icon'} />
                <input 
                    type='text' 
                    placeholder='Search Movie' 
                    value={state}
                    onChange={event => setState(event.target.value)}
                />
            </Content>
        </Wrapper>
    )
}

export default SearchBar