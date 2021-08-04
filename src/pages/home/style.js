import styled from "styled-components"

import { blueColor, redColor, whiteColor } from "../../style/colors"

export const Container = styled.div`

    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-areas: "ASIDE SECTION";
    grid-template-rows: 100vh;
    grid-template-columns: auto 800px;

    h1{
        font-size: 56px;
        margin-bottom: 50px;
    }

    p{
        font-size: 32px;
    }

    aside{
        padding: 150px 350px 0 30px; 

        background: ${blueColor};
        color: rgb(255, 255, 255);
    }

    section{
        grid-area: SECTION;

        min-width: 700px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        padding: 0 200px;
    }

    section > div{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        gap: 30px;
    }

    .btn-index{
        width: 100%;
        height: 50px;
        border-radius: 15px;
        cursor: pointer;
        font-weight: bolder;
        border: 2px solid black;
    }

    #btn-google{
        background: ${redColor};
        color: ${whiteColor}
    }
`