import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 110px;
    background: var(--darkGrey);
    padding: 0 20px;
`

export const Content = styled.div`
    position: relative;
    max-width: var(--maxWidth);
    width: 100%;
    height: 65px;
    background: var(--medGrey);
    margin: 0 auto;
    border-radius: 40px;
    color: var(--white);

    img {
        position: absolute;
        left: 10px;
        top: 5px;
        width: 60px;
    }

    input {
        font-size: 28px;
        position: absolute;
        left: 0;
        margin: 8px 8px;
        padding: 0 0 0 60px;
        border: 0;
        width: 95%;
        background: transparent;
        height: 45px;
        color: var(--white);

        :focus {
            outline: none;
        }
    }
`

