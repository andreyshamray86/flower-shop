import styled from "styled-components";

export const RandomStyled = styled.div`
    padding: 0 200px;
    display: flex;
    justify-content: space-between;
    margin: 60px auto;
    .random {
        &__item {
            &-image {
                width: 200px;
                img {
                    width: 100%;
                }
            }
        }
    }
`;

export const RandomTitleStyled = styled.h2`
    font-size: 24px;
    color: #d23878;
    text-align: center;
`;