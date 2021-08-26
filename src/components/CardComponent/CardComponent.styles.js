import styled from "styled-components";

const CardStyled = styled.div`
    padding: 50px 200px;
    color: #5a5a5a;
    .card {
        &__info {
            &-title {
                font-size: 24px;
                text-transform: uppercase;
                text-align: center;
            }
            &-text {
                margin-top: 20px;
                text-align: center;
            }
        }
        &__image {
            width: 90%;
            margin: 0 auto;
            margin-top: 30px;
            position: relative;
            img {
                width: 100%;
            }
            &-inputText {
                position: absolute;
                top: 270px;
                left: 253px;
                padding: 20px;
                border: none;
                resize: none;
                color: inherit;
                font-family: 'Allison', cursive;
                font-size: 44px;
                line-height: 30px;
            }
            &-inputName{
                position: absolute;
                bottom: 205px;
                right: 237px;
                font-size: 20px;
                padding: 5px 15px;
                width: 300px;
                border: none;
                color: inherit;
                font-family: 'Allison', cursive;
                font-size: 36px;
                line-height: 24px;
                letter-spacing: 3px;
                text-align: right;
            }
            &-btn {
                width: 100px;
                padding: 5px 10px;
                position: absolute;
                bottom: 115px;
                right: calc(50% - 50px);
                font-family: 'Allison', cursive;
                font-size: 32px;
                line-height: 24px;
                font-weight: bolder;
                color: inherit;
                background-color: #fff;
                border: 1px solid #5a5a5a;
                border-radius: 10px;
                &:hover {
                    background-color: #d23878;
                    border-color: #8cae3e;
                    color: #fff;
                }
            }
        }
    }
`;

export default CardStyled;