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
        &-empty {
            margin-top: 50px;
            font-size: 20px;
            text-align: center;
        }
    }

    @media (max-width: 1200px) {
        padding: 50px 100px 0 100px;

        .cartlist {
            &__header {
                font-weight: bolder;
                font-size: 14px;
                &-item {
                    text-align: center;
                }
            }
        }
    }

    @media (max-width: 768px) {
        padding: 50px 50px 0 50px;
    }

    @media (max-width: 580px) {
        padding: 50px 20px 0 20px;

        .cartlist {
            &__header {
                font-weight: bolder;
                font-size: 14px;
            }
        }
    }

    @media (max-width: 380px) {
        padding: 50px 10px 0 10px;

        .cartlist {
            &__header {
                font-weight: bolder;
                font-size: 10px;
                &-item {
                    text-align: center;
                }
            }
        }
    }
`;

export const CartTitleStyled = styled.h2`
    padding: 50px 200px 0 200px;
    font-size: 26px;
    text-align: center;

    @media (max-width: 580px) {
        padding: 50px 20px 0 20px;
    }

    @media (max-width: 380px) {
        padding: 50px 10px 0 10px;
    }
`;

export const CartTotalStyled = styled.span`
    display: block;
    padding: 20px 200px 0 200px;
    text-align: right;
    margin-bottom: 30px;

    @media (max-width: 1200px) {
        padding: 50px 100px 0 100px;
    }

    @media (max-width: 768px) {
        padding: 50px 50px 0 50px;
    }

    @media (max-width: 580px) {
        padding: 50px 20px 0 20px;
    }

    @media (max-width: 380px) {
        padding: 50px 10px 0 10px;
    }
`;

export const ButtonWrap = styled.div`
    text-align: right;
    margin-right: 200px;
    margin-bottom: 40px;

    @media (max-width: 1200px) {
        margin-right: 0;
        text-align: center;
    }
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

    @media (max-width: 580px) {
        margin-bottom: 10px;
    }
    
`;