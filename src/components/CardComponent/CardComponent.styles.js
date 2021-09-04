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
            &-wrapper {
                position: relative;
            }
            &-formwrapper {
                position: absolute;
                top: 36%;
                left: 25%;
                width: 51%;
                height: 37%;
            }
            &-inputText {
                position: absolute;
                top: 0;
                left: 0;
                width: 90%;
                height: 60%;
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
                bottom: 0;
                right: 0;
                font-size: 18px;
                padding: 5px 0;
                margin-right: 10px;
                width: 90%;
                height: 10%;
                border: none;
                color: inherit;
                font-family: 'Allison', cursive;
                font-size: 36px;
                line-height: 24px;
                letter-spacing: 3px;
                text-align: right;
                &::-webkit-input-placeholder {
                    font-size: 36px;
                    text-align: right;
                }
            }
            &-btn {
                width: 100px;
                padding: 5px 10px;
                position: absolute;
                bottom: -115px;
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

    @media (max-width: 1200px) {
        padding: 50px 100px;

        .card {
            &__info {
                &-text {
                    width: 80%;
                    margin: 0 auto;
                    margin-top: 20px;
                }
            }
            &__image {
                &-inputText {
                    padding: 10px;
                    font-size: 30px;
                    line-height: 30px;
                }
                &-inputName{
                    font-size: 28px;
                    line-height: 20px;
                    &::-webkit-input-placeholder {
                        font-size: 28px;
                    }
                }
            }
        }
    }

    @media (max-width: 768px) {
        padding: 50px 10px;

        .card {
            &__info {
                &-text {
                    width: 60%;
                    margin: 0 auto;
                    margin-top: 20px;
                }
            }
            &__image {
                &-inputText {
                    font-size: 30px;
                    line-height: 22px;
                }
                &-inputName{
                    font-size: 28px;
                    line-height: 24px;
                    &::-webkit-input-placeholder {
                        font-size: 26px;
                    }
                }
                &-btn {
                    bottom: -93px;
                }
            }
        }
    }

    @media (max-width: 540px) {
        padding: 50px 10px;

        .card {
            &__info {
                &-text {
                    width: 70%;
                    margin: 0 auto;
                    margin-top: 20px;
                }
            }
            &__image {
                &-inputText {
                    padding: 5px;
                    font-size: 24px;
                    line-height: 22px;
                }
                &-inputName{
                    font-size: 18px;
                    line-height: 20px;
                    &::-webkit-input-placeholder {
                        font-size: 16px;
                    }
                }
                &-btn {
                    width: 70px;
                    padding: 3px 5px;
                    bottom: -65px;
                    right: calc(50% - 35px);
                    font-size: 26px;
                }
            }
        }
    }

    @media (max-width: 380px) {
        .card {
            &__info {
                &-text {
                    width: 80%;
                    margin: 0 auto;
                    margin-top: 20px;
                }
            }
            &__image {
                &-inputText {
                    font-size: 18px;
                }
                &-inputName{
                    font-size: 14px;
                    line-height: 20px;
                    &::-webkit-input-placeholder {
                        font-size: 12px;
                    }
                }
            }
        }
    }
`;

export default CardStyled;