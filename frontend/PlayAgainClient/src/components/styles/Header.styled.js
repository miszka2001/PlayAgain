import styled from 'styled-components'

export const StyledHeader = styled.nav`
    position: fixed;
    top: 4%;
    left: 0%;
    right: 0%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-top: 2px solid blue;
    border-bottom: 2px solid blue;
    transition: border-color 0.3s ease;
    background-color: black;
    color: lightblue;

    &:hover {
        border-color: orangered;
    }


    div {
        margin: 20px;
        cursor: pointer;
        color: white;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }

    div:hover {
        color: orangered;
    }

    div:active {
        color: blue;
    }

`
