import styled from "styled-components";


const ItemStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 250px;
    margin-bottom: 20px;
    color: #5a5a5a;
    .item {
        &__image {
            width: 100%;
            height: 160px;
            text-align: center;
            position: relative;
            img {
                height: 100%;
            }
            &-like {
                position: absolute;
                bottom: -33px;
                right: 17px;
                width: 25px;
                height: 25px;
                p {
                    display: block;
                    position: absolute;
                    width: 10px;
                    height: 10px;
                    top: calc(50% - 5px);
                    left: calc(50% - 5px);
                    font-size: 10px;
                    color: #d23878;
                }
            }
        }
        &__info {
            &-title {
                margin-top: 25px;
                text-transform: uppercase;
                text-align: center;
            }
            &-price {
                margin-top: 15px;
                text-align: center;
            }
        }
        &__btn {
            width: 50%;
            margin: 0 auto;
            margin-top: 20px;
            padding: 5px 10px;
            background-color: #fff;
            color:#5a5a5a;
            border: 1px solid #5a5a5a;
            &:hover {
                background-color: #8cae3e;
                border-color: #8cae3e;
                color: #fff;
            }
        }
    }
`;

export default ItemStyled;