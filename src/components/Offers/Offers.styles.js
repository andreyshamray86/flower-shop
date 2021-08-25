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
`;

export default OffersStyled;