import styled from "styled-components";

export const CheckoutStyled = styled.div`
    padding: 50px 200px;
    .checkout {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        color: #5a5a5a;
        &__item {
            margin-bottom: 20px;
            &-name {
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
            .header {
                font-weight: bolder;
            }
        }
    }
    .btn__wrap {
        text-align: center;;
    }

    @media (max-width: 1200px) {
        padding: 50px 80px 0 80px;
    }

    @media (max-width: 768px) {
        padding: 50px 20px 0 20px;
    }

    @media (max-width: 580px) {
        width: 100%;
        padding: 50px 20px 0 20px;
        font-size: 12px;
    }

    @media (max-width: 380px) {
        font-size: 10px;
        padding: 0;
    }
`;

export const CheckoutTitleStyled = styled.h2`
    padding: 50px 0 20px 0;
    font-size: 24px;
    text-align: center;
    text-transform: uppercase;
    color: #5a5a5a;
`;

export const CheckoutTotalStyled = styled.span`
    display: block;
    padding: 20px 200px 0 200px;
    text-align: center;
    margin-bottom: 30px;
    font-size: 20px;

    @media (max-width: 1200px) {
        padding: 50px 80px 0 80px;
    }

    @media (max-width: 768px) {
        padding: 20px 20px 0 20px;
    }

    @media (max-width: 580px) {
        width: 100%;
        padding: 20px 20px 0 20px;
        font-size: 18px;
    }

    @media (max-width: 380px) { 
        font-size: 14px;
        padding: 0;
    }
`;

export const BtnStyled = styled.button`
    margin: 0 auto;
    padding: 10px 30px;
    background-color: #fff;
    color: #d23878;
    text-transform: uppercase;
    border: 1px solid #d23878;
    transition: all 0.2s;
    &:hover {
        background-color: #d23878;
        color: #fff;
        transform: scale(1.1);
    }
`;