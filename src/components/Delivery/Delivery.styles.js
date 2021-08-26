import styled from "styled-components";

export const DeliveryStyled = styled.div`
    /* height: 500px; */
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
`;

export default DeliveryStyled;