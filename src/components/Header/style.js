import styled from 'styled-components';

export const Container = styled.nav`
    background: blue;
    width: 100vw;
    height: 80px;
    grid-area: nav;
    display:flex;
    align-items:center;
    h1{
        padding-left:5px;
        color:white;
        text-transform:uppercase;
        font-weight: 500;
    }
    h1>strong{
        font-weight: 800;
    }
`
