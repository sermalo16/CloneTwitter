import styled from "styled-components"


export const Container = styled.div`
flex: 0.5;
border-right: 1px solid #ddd;
overflow-y: scroll;
box-sizing: border-box;
&::-webkit-scrollbar{
    display: none;
}

-ms-overflow-style: none;
scrollbar-width: none;
` 

export const Header = styled.header`
`
/* Estilos del TweetBox*/


export const Tweetbox = styled.div`
padding: 5px 15px;
`

export const Div = styled.div`
display: flex;
width: 100%;
>.columns{
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-right: 16px;
    >input{
        margin-left: 10px;
        margin-top: 10px;
        width:100%;
        border: none;
        outline: 0;
        font-size: 19px;
        line-height: 25px;
        color: #0f1419;
    }
}
>input{
    margin-left: 10px;
    width: 100%;
    flex: 1;
    border:none;
    font-size:19px;
    line-height: 25px;
    color: #0f1419;
    outline: 0;

}
>Button{
    background-color: var(--twitterColor);
    border: none;
    color: white;
    
}
`

export const Avatar = styled.img`
border-radius: 50%;
width: 50px;
height:50px;
object-fit: fill;

`

export const Form = styled.form`
display: flex;
flex-direction: column;
`

export const DivBox = styled.div`
`