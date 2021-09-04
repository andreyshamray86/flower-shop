import styled from "styled-components";

import image from '../../assets/images/header-image.jpg'

const PromoStyled = styled.div`
    width: 100%;
    height: 450px;
    position: relative;
    background: url(${image});
    text-align: center;
    .promo {
        &__title {
            display: inline-block;
            position: relative;
            margin-top: 100px;
            text-align: center;
            color: #fff;
            font-size: 24px;
            line-height: 36px;
            text-transform: uppercase;
            z-index: 3;
        }
        &__text {
            display: block;
            margin: 0 auto;
            margin-top: 30px;
            width: 40%;
            position: relative;
            color: #fff;
            font-size: 18px;
            line-height: 26px;
            text-align: center;
            z-index: 3;
        }
        &__btn {
            position: relative;
            width: 120px; 
            height: 35px;  
            margin-top: 40px;
            padding: 10px 15px;
            background-color: #8cae3e;
            color: #fff;
            font-size: 14px;
            text-transform: uppercase;
            border: none;
            z-index: 3;
            cursor: pointer;
            transition: all 0.3s;
            &:hover {
                background-color:#d23878;
            }
        }
        
    }
    &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,.6);
            z-index: 2;
    }

    @media (max-width: 1200px) {
        height: 350px;

        .promo {
            &__title {
                margin-top: 50px;
                font-size: 22px;
            }
            &__text {
            margin-top: 20px;
            width: 50%;
            font-size: 18px;
            }
            &__btn {
                margin-top: 20px;
            }
        }
    }

    @media (max-width: 768px) {
        height: 300px;

        .promo {
            &__title {
                margin-top: 20px;
                font-size: 18px;
            }
            &__text {
                margin-top: 10px;
                width: 70%;
                font-size: 16px;
            }
            &__btn {
                margin-top: 20px;
            }
        }
    }

    @media (max-width: 570px) {
        height: 260px;

        .promo {
            &__title {
                margin-top: 10px;
                font-size: 16px;
            }
            &__text {
                margin-top: 5px;
                width: 90%;
                font-size: 14px;
            }
            &__btn {
                width: 100px; 
                height: 32px;
                margin-top: 20px;
                font-size: 12px;
            }
        }
    }

    @media (max-width: 380px) {

        .promo {
            &__title {
                margin-top: 10px;
                font-size: 14px;
                line-height: 20px;
            }
            &__text {
                margin-top: 10px;
                width: 90%;
                font-size: 12px;
            }
            &__btn {
                width: 100px; 
                height: 32px;
                margin-top: 20px;
                font-size: 12px;
            }
        }
    }
`;

export default PromoStyled;