import styled from "styled-components";

export const RandomStyled = styled.div`
    padding: 0 200px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 60px auto;
    position: relative;
    .random {
        &__item {
            width: 250px;
            height: 300px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            color: #5a5a5a;
            margin-bottom: 40px;
            &-title {
                font-size: 20px;
            }
            &-price {
                font-weight: bolder;
            }
            &-image {
                width: 200px;
                height: 160px;
                text-align: center;
                img {
                    height: 100%;
                }
            }
            &-btn {
                padding: 3px 20px;
                border: 1px solid #5a5a5a;
                background-color: #fff;
                transition: all 0.2s;
                &:hover {
                    background-color: #d23878;
                    color: #fff;
                    border-color: #d23878;
                }
            }
        }
    }

    @media (max-width: 1440px) {
        justify-content: space-between;

    }

    @media (max-width: 1200px) {
        padding: 0 100px;
        justify-content: space-between;
    }


    @media (max-width: 768px) {
        justify-content: center;
    }

    @media (max-width: 380px) {
        padding: 0 20px;
    }
    
`;

export const RandomTitleStyled = styled.h2`
    font-size: 24px;
    text-transform: uppercase;
    color: #d23878;
    text-align: center;

    @media (max-width: 768px) {
        margin-top: 40px;
    }
`;