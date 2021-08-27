import styled from "styled-components";

export const RandomStyled = styled.div`
    padding: 0 200px;
    display: flex;
    justify-content: space-between;
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
            &-title {
                font-size: 20px;
            }
            &-price {
                font-weight: bolder;
            }
            &-image {
                width: 200px;
                img {
                    width: 100%;
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
    
`;

export const RandomTitleStyled = styled.h2`
    font-size: 24px;
    text-transform: uppercase;
    color: #d23878;
    text-align: center;
`;