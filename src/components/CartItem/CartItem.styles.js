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

    @media (max-width: 1200px) {
        .cartlist__item {
            &-total {
                .bin {
                    right: -20px;
                }
            }
        }
    }

    @media (max-width: 580px) {
        .cartlist__item {
            &-info {
                
                .textblock {
                    &__title {
                        font-size: 18px;
                    }
                    &__size {
                        font-size: 14px;
                    }
                    &__delivery {
                        font-size: 14px;
                    }
                }
                img {
                    width: 40px;
                    height: 40px;
                }
            }
            &-price {
            width: 10%;
            font-size: 14px;
            text-align: center;
            }
            &-quantity {
                width: 25%;
                text-align: center;
                font-size: 14px;
                .minus {
                    font-size: 18px;
                }
                .plus {
                    font-size: 18px;
                }
            }
            &-total {
                font-size: 14px;
                .bin {
                    top: 22px;
                    right: 14px;
                }
            }
        }
    }

    @media (max-width: 380px) {
        .cartlist__item {
            &-info {
                .textblock {
                    &__title {
                        font-size: 14px;
                    }
                    &__size {
                        font-size: 10px;
                    }
                    &__delivery {
                        font-size: 10px;
                    }
                }
                img {
                    width: 30px;
                    height: 30px;
                }
            }
            &-quantity {
                width: 25%;
                text-align: center;
                font-size: 14px;
                .minus {
                    font-size: 14px;
                    margin-right: 5px;
                }
                .plus {
                    font-size: 14px;
                    margin-left: 5px;
                }
            }
            &-total {
                .bin {
                    right: -4px;
                }
            }
        }
    }
`;

export default CartListItemStyled;