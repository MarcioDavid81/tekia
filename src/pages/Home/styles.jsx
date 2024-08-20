import styled from "styled-components";

export const HomeContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    min-height: 100vh;
    margin: 0;
    box-sizing: border-box;
    color: #333;

    .items{
        padding: 20px 0;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 50px;
    }

    .watch{
        width: 100%;
        max-width: 400px;
        transform: translateX(-700px) rotate(180deg);
        opacity: 0;
    }

    .models_content{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 50px;
        margin: 10% 0;

        .models_item img{
            width: 100%;
            max-width: 250px;

            &:hover{
                transform: scale(1.02);
                transition: 0.5s;
            }
        }

        .models_item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;

            span{
                color: #E61593;
            }
        }
    }

`;