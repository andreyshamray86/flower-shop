import styled from "styled-components";

export const DeliveryStyled = styled.div`
    padding: 50px 200px;
    background-color: #e7e7e7;
    text-align: center;
    color: #5a5a5a;
    .delivery {
        &__title {
            display: inline-block;
            font-size: 24px;
            text-transform: uppercase;
        }
        &__text {
            display: block;
            width: 50%;
            margin: 0 auto;
            margin-top: 30px;
            text-align: center;
        }
        &__features {
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin-top: 50px;
            &-image {
                background-color: #fff;
                border: 1px solid #fff;
                border-radius: 50%;
                width: 150px;
                height: 150px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background-color: #8cae3e;
                box-shadow: 4px 4px 10px 0px #8cae3e;
                img {
                    height: 65px;
                    width: auto;
                }
                p {
                    font-size: 14px;
                    margin-top: 5px;
                }
            }
        }
    }

    @media (max-width: 1200px) {
        padding: 50px 100px;
        .delivery {
            &__title {
                font-size: 24px;
            }
            &__text {
                width: 70%;
            }
        }
    }


    @media (max-width: 768px) {
        padding: 50px 30px;
        .delivery {
            &__title {
                font-size: 24px;
            }
            &__text {
                width: 90%;
                margin-top: 30px;
                text-align: center;
            }
            &__features {
                justify-content: space-evenly;
                &-image {
                    width: 110px;
                    height: 110px;
                    img {
                        height: 45px;
                    }
                    p {
                        margin-top: 10px;
                        font-size: 10px;
                    }
                }
            }
        }
    }

    @media (max-width: 430px) {
        padding: 30px 20px;
        .delivery {
            &__features {
                flex-direction: column;
                justify-content: space-between;
                &-image {
                    width: 150px;
                    height: 150px;
                    margin-bottom: 20px;
                    img {
                        height: 55px;
                    }
                    p {
                        font-size: 14px;
                    }
                }
            }
        }
    }
`;

export default DeliveryStyled;