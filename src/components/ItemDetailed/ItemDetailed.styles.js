import styled from "styled-components";



const ItemDetailedStyled = styled.div`
    padding: 50px 200px;
    display: flex;
    justify-content: center;
    color: #5a5a5a;
    .image {
        width: 40%;
        margin-right: 40px;
        text-align: center;
        img {
            max-width: 100%;
            max-height: 100%;
        }
    }
    .info {
        display: flex;
        flex-direction: column;
        width: 40%;
        &__title {
            font-size: 24px;
            text-transform: uppercase;
        }
        &__price {
            display: block;
            margin-top: 15px;
            font-size: 20px;
        }
        &__like {
            margin-top: 30px;
        }
        &__size {
            display: block;
            margin-top: 30px;
            margin-bottom: 5px;
        }
        &__sizechoice-item {
            display: inline-block;
            border: 1px solid #5a5a5a;
            margin-right: 5px;
            padding: 5px;
            transition: all 0.2s;
            &:hover {
                background-color: #8cae3e;
                color: #fff;
                border-color: #8cae3e;
                cursor: pointer;
            }
            
        }
        &__btn {
            width: 150px;
            margin-top: 50px;
            padding: 10px 15px;
            background-color: #d23878;
            border: 1px solid #d23878;
            color: #fff;
            text-transform: uppercase;
            font-size: 14px;
            transition: all 0.2s;
            &:hover {
                transform: scale(1.1);
                cursor: pointer;
            }
        }
        &__date {
            width: 50%;
            margin-top: 20px;
            padding: 5px;
            color: #5a5a5a;
            font-family: inherit;
            border: 1px solid #5a5a5a;
            cursor: pointer;
            &-label {
                margin-top: 20px;
            }
        }
        .gifts {
            display: block;
            margin-top: 30px;
            &__choice {
                display: flex;
                align-items: center;
                margin-top: 10px;
                overflow-x: scroll;
                &-item {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    margin-right: 20px;
                    height: 110px;
                    padding: 5px;
                    border: 1px solid transparent;
                    transition: all 0.4s;
                    &:hover {
                        border: 1px solid #8cae3e;
                        border-radius: 5px;
                        cursor: pointer;
                    }
                    img {
                        width: 50px;
                    }
                    
                }
            }
        }
    }
    .active {
        background-color: #8cae3e;
        color: #fff;
        border-color: #8cae3e; 
    }

    @media (max-width: 1200px) {
        flex-direction: column;
        align-items: center;
        width: 80%;
        padding: 50px 100px;
        text-align: center;

        .image {
            margin-bottom: 30px;
        }

        .info {
            &__btn {
                margin: 0 auto;
                margin-top: 30px;
            }
        }
    }

    @media (max-width: 768px) {
        padding: 50px 50px;

        .info {
            width: 60%;
            .gifts {
                /* width: 100%; */
            }
        }
    }

    @media (max-width: 480px) {
        padding: 50px 10px;

        .info {
            width: 80%;
            &__sizechoice-item {
                font-size: 12px;
            }
        }
    }
`;

export default ItemDetailedStyled;