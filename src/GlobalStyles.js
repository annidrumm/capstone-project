import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
body {
    margin: 0;
    font-size: 112.5%;
    background: var( --background-darkblue);
    color: var(--font-color-white);
}

:root{
    --background-darkblue: #1c114e;
    --font-color-white: #FFFFFF;
    --transparent-blue: #ffffff1a;
    --action-darkgreen: #51B6AB;
    --lightgreen: #52B7BC;
    --lightblue: #66BAF7;
    --lightpurple: #66BAF7;
    --lightpink:#F9D9DA;
    --darkyellow: #F7BF67;

    --font-weight-semibold: 600;
    --font-weight-regular: 400;
    --font-weight-light: 300;
}
`
