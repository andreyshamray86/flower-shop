import styled from "styled-components";

const OffersStyled = styled.div`
    display: flex;
    justify-content: space-between;
    height: 450px;
    padding: 0 100px;
    margin-top: 30px;
    .offers {
        &__item {
            position: relative;
            z-index: 10;
            width: 400px;
            height: 400px;
            color: #000;
            box-shadow: 0px 0px 15px 0px rgba(140, 174, 62, 0.3);
            transition: all 0.4s;
            &:hover {
                background-color: #fff;
                cursor: pointer;
                .offers__item-btn {
                    border: 1px solid #8cae3e;
                    background-color: #8cae3e;
                    color: #fff;
                }  
                .btn-bestseller {
                    border: 1px solid #d23878;
                    background-color: #d23878;
                } 
            }
            &-title {
                margin-top: 25px;
                font-size: 20px;
                text-align: center;
                text-transform: uppercase;
            }
            &-text {
                margin-top: 10px;
                font-size: 16px;
                text-align: center;
            }
            &-btn {
                position: relative;
                z-index: 10;
                display: block;
                margin: 0 auto;
                margin-top: 15px;
                background-color: #fff;
                border: 1px solid #000;
                width: 130px;
                height: 30px;
                font-size: 12px;
                text-transform: uppercase;
            }
            &-image {
                position: absolute;
                width: 250px;
                height: 250px;
                top: 95px;
                left: calc(50% - 125px);
                z-index: 5;
            }
            
        }
    }

    .bestseller {
        background-color: rgba(210,56,120, 0.5);
        box-shadow: 0px 5px 10px 0px rgba(210,56,120, 0.7);  
    }
    .birthday,
    .cheapest {
        background-color: rgba(140, 174, 62, 0.5);
        box-shadow: 0px 5px 10px 0px rgba(140, 174, 62, 0.7);
    }

    @media (max-width: 1440px) {
        justify-content: space-around;
        padding: 0 80px;
        height: 400px;
        .offers {
            &__item {
                width: 320px;
                height: 320px;

                &-image {
                width: 200px;
                height: 200px;
                left: calc(50% - 100px);
                }
            }
        }
    }

    @media (max-width: 1200px) {
        padding: 0 30px;
        height: 270px;
        .offers {
            &__item {
                width: 230px;
                height: 230px;
                
                &-title {
                    margin-top: 10px;
                    font-size: 18px;
                }
                &-text {
                    margin-top: 10px;
                    font-size: 14px;
                }

                &-image {
                width: 130px;
                height: 130px;
                top: 80px;
                left: calc(50% - 65px);
                }
            }
        }
    }

    @media (max-width: 768px) {
        height: 800px;
        padding: 0 30px;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        
        .offers {
            &__item {
                width: 50%;
                height: 200px;
                padding: 20px;

                &-title {
                    margin-top: 5px;
                    font-size: 18px;
                    text-align: center;
                }
                &-text {
                    display: none;
                }

                &-image {
                    width: 150px;
                    height: 150px;
                    top: 74px;
                    left: calc(50% - 75px);
                }
                &-btn {
                    margin-top: 30px;
                }
            }
        }
    }

    @media (max-width: 380px) {
        .offers {
            &__item {
                width: 90%;
                height: 200px;
                padding: 20px;
            }
        }
    }
`;

export default OffersStyled;