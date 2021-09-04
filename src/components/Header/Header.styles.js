import styled from "styled-components";

import vase from '../../assets/icons/vase.svg'

const HeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1440px;
    height: 80px;
    padding: 0 100px;
    position: relative;
    .left {
        width: 550px;
        display: flex;
        justify-content: space-between;
        &__logo {
            display: flex;
            justify-content: space-between;
            align-items: center;

            h1 {
                font-size: 24px;
                font-weight: bold;
                color: #d23878;
            }
            &-shop {
                color: #8cae3e;
            }
        }

        &__nav {
            display: flex;
            height: 100%;
            align-items: center;
            &-item {
                margin-right: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 20px;
                padding: 7px;
                font-size: 17px;
                color: #d23878;
                border: 1px solid transparent;
                text-decoration: none;
                cursor: pointer;
                transition: all 0.3s;

                &:hover {
                    color: #8cae3e;
                    box-shadow: 4px 4px 8px 0px rgba(140, 174, 62, 0.3);
                    border-radius: 5px;    
                }
            }
        }
        a {
            text-decoration: none;
        }
    }

    .right {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 300px;
        &__auth {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 20px;
            padding: 7px;
            font-size: 17px;
            color: #d23878;
            border: 1px solid transparent;
            cursor: pointer;
            transition: all 0.3s;
            &:hover {
                color: #8cae3e;
                box-shadow: 4px 4px 8px 0px rgba(140, 174, 62, 0.3);
                border-radius: 5px; 
            }
            a {
                color: #d23878;
                text-decoration: none;
            }
        }
        &__cart {
            position: relative;
            cursor: pointer;
            &-quantity {
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                top: 2px;
                right: 11px;
                width: 27px;
                height: 27px;
                border: 1px solid #fff;
                border-radius: 50%;
                color: #d23878;
                font-size: 14px;
                background: url(${vase});
                background-color: #fff;
            }
        }
        &__search {
            cursor: pointer;
        }
    }

    .sidebar-menu {
        position: absolute;
        top: 0;
        left: 0;
        width: 200px;
        height: 100vh;
        padding: 20px;
        background-color: #fff;
        z-index: 100;
        transition: all .4s;
        transform: translateX(-242px);
        .sidebar__nav {
            display: flex;
            flex-direction: column;
            
            &-item {
                margin-right: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 20px;
                padding: 7px;
                font-size: 17px;
                color: #d23878;
                border: 1px solid transparent;
                text-decoration: none;
                cursor: pointer;
                transition: all 0.3s;

                &:hover {
                    color: #8cae3e;
                    box-shadow: 4px 4px 8px 0px rgba(140, 174, 62, 0.3);
                    border-radius: 5px;    
                }
            }
        }
    }

    .hamburger {
        display: none;
        position: absolute;
        top: 20px;
        left: 24px;
        transition: all .4s;
        label {
            display:flex;
            flex-direction:column;
            width:40px;
            cursor:pointer;
        }

        label span {
            background: #d23878;
            border-radius:10px;
            height:7px;
            margin: 3px 0;
            transition: .4s  cubic-bezier(0.68, -0.6, 0.32, 1.6);
        }

        span:nth-of-type(1) {
            width:50%;
        }

        span:nth-of-type(2) {
            width:100%;
        }

        span:nth-of-type(3) {
            width:75%;
        }
    }

    @media (max-width: 1200px) {
        padding: 0 30px;
        .left {
        width: 400px;
            &__logo {
                height: 100%;
                margin-right: 20px;
                h1 {
                    font-size: 20px;
                }
                &-shop {
                    font-size: 20px;
                }
                &-image {
                    width: 60px;
                    height: 60px;
                }
            }
        }
    }

    @media (max-width: 768px) {
        padding: 0 10px;
        .left {
            width: 300px;
            &__logo {
                height: 100%;
                margin-right: 10px;
                h1 {
                    font-size: 16px;
                }
                &-shop {
                    font-size: 16px;
                }
            }
            &__nav {

                &-item {
                    margin-right: 5px;
                    height: 20px;
                    padding: 7px;
                    font-size: 14px;
                }
            }
        }
        .right {
            justify-content: flex-end;
            &__auth {
                padding: 7px;
                font-size: 14px;
            }
            &__cart {
                &-quantity {
                    font-size: 12px;
                }
            }
        }
    }

    @media (max-width: 570px) {
        .sidebar-menu {
            &.show {
                transform: translateX(0);
                box-shadow: 0px 4px 25px 0px rgba(0,0,0, 0.6); 
                overflow: hidden;
            }
        }
        .hamburger {
            display: block;
            background-color: #fff;
            &.show {
                padding: 5px;
                transform: translateX(215px);
                z-index: 100;
                box-shadow: 0px 4px 25px 0px rgba(0,0,0, 0.6);
                span:nth-of-type(1) {
                    transform-origin:bottom;
                    transform:rotatez(45deg) translate(6px,3px)
                } 
                span:nth-of-type(2){
                    width: 83%;
                    transform-origin:top;
                    transform:rotatez(-45deg)
                }
                span:nth-of-type(3){
                    transform-origin:bottom;
                    width:44%;
                    transform: translate(13px,-10px) rotatez(45deg);
                }
            }
        }
        .left {
            justify-content: flex-end;
            margin: 0;
            margin-left: 50px;
            &__nav {
                display: none;
            }

        }
        .right {
            justify-content: center;
            &__auth {
                display: none;
            }
        }
        
    }

`;

export default HeaderStyled;