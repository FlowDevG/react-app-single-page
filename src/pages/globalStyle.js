import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
}
`
export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 991px){
        padding-right: 30px;
        padding-left: 30px;
    }
`
export const Button = styled.button`
    border-radius: 50px;
    border: none;
    background: ${({primary}) => (primary ? '#4B59f5' : '#0467fb')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    cursor: pointer;
    animation: zoomin 2s infinite;

    &:hover{
        transition: all 0.3s ease-out;
        background: #fff;
        color: #000;
        border: solid;
        border-color: #0467fb;
        animation: zoomin;
        background: ${({primary}) => (primary ? '#0467fb' : '4B59f5')};
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }

    @keyframes zoomin {
        0%{
            transform: scale(1,1);
        }
        50%{
            transform: scale(1.1,1.1);
        }
        100%{
            transform: scale(1,1);
        }
    }
`
export const Button1 = styled.button`
    border-radius: 50px;
    border: none;
    background: ${({primary}) => (primary ? '#4B59f5' : '#0467fb')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    cursor: pointer;
    

    &:hover{
        transition: all 0.3s ease-out;
        background: #fff;
        background: ${({primary}) => (primary ? '#0467fb' : '4B59f5')};
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }  
`

export default GlobalStyle;