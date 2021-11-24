import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;
    text-align: center;
    margin-top: 50px;
    div{
        margin: 20px;
    }

    form{
        p{
            color:blue;
            text-transform: uppercase;
            font-weight:700;
        }
        input{
            border-color: blue;
            outline-color:blue;
            padding:5px 0px;
        }
        textarea{
            border-color: blue;
            outline-color:blue;
        }
    }
`