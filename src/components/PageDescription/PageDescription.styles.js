import styled from "styled-components";

import image from '../../assets/images/flowers-description.jpg'
import image2 from '../../assets/images/gifts.jpg';

const PageDescriptionStyled = styled.div`
    width: 100%;
    height: 250px;
    position: relative;
    background: url(${props => props.image === 'flowers' ? image: image2}) center;
    text-align: center;
    .promo {
        &__title {
            display: inline-block;
            position: relative;
            margin-top: 85px;
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
`;

export default PageDescriptionStyled;