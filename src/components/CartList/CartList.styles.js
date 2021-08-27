import styled from "styled-components";

export const CartListStyled = styled.div`
    padding: 50px 200px 0 200px;
    .cartlist {
        display: flex;
        flex-direction: column;
        color: #5a5a5a;
        &__header {
            font-weight: bolder;
            &-item {
                display: inline-block;
                width: 55%;
            }
            &-price {
                display: inline-block;
                width: 10%;
                text-align: center;
            }
            &-quantity {
                display: inline-block;
                width: 25%;
                text-align: center;
            }
            &-total {
                display: inline-block;
                width: 10%;
                text-align: center;
            }
        }
        &__item {
            display: flex;
            align-items: center;
            margin-top: 10px;
            height: 100px;
            
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
    }
`;

export const CartTitleStyled = styled.h2`
    padding: 50px 200px 0 200px;
    font-size: 26px;
    text-align: center;
`;

export const CartTotalStyled = styled.span`
    display: block;
    padding: 20px 200px 0 200px;
    text-align: right;
    margin-bottom: 30px;
`;

export const ButtonWrap = styled.div`
    text-align: right;
    margin-right: 200px;
    margin-bottom: 40px;
`;

export const BtnStyled = styled.button`
    margin-left: 30px;
    padding: 10px 30px;
    background-color: #d23878;
    color: #fff;
    border: 1px solid #d23878;
    transition: all 0.2s;
    &:hover {
        background-color: #fff;
        color: #d23878;
    }
`;