import React from 'react'

import { Link } from 'react-router-dom'

import { Wrapper, Content, Banner } from './Header.styles'

const Header = () => (
    <Wrapper>
        <Content> 
            <Banner>
                <Link to='/'>
                    <h1>React Cinema</h1>
                </Link>
            </Banner>
           
        </Content>
    </Wrapper>
)

export default Header