import styled from "styled-components";

const CartListItemStyled = styled.li`
    display: flex;
    align-items: center;
    margin-top: 10px;
    height: 100px;
    .cartlist__item {
        &-info {
            display: flex;
            width: 55%;
            .textblock {
                display: flex;
                flex-direction: column;
                &__title {
                    font-size: 20px;
                }
                &__size {
                    margin-top: 10px;
                }
                &__delivery {
                    margin-top: 5px;
                }
            }
            img {
                height: 70px;
                margin: 0 15px;
            }
        }
        &-price {
            width: 10%;
            text-align: center;
        }
        &-quantity {
            width: 25%;
            text-align: center;
            font-size: 18px;
            .minus {
                font-size: 24px;
                margin-right: 10px;
                cursor: pointer;
                color: #d23878;
            }
            .plus {
                font-size: 24px;
                margin-left: 10px;
                cursor: pointer;
                color: #d23878;
            }
        }
        &-total {
            width: 10%;
            text-align: center;
            position: relative;
            .bin {
                position: absolute;
                top: -2px;
                right: -12px;
                width: 20px;
                height: 20px;
                cursor: pointer;
            }
        }
    }
`;

export default CartListItemStyled;