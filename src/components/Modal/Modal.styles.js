import styled from "styled-components";

const ModalStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    z-index: 1;
    transition: all 0.5s;
    .modal {
        position: absolute;
        top: 35%;
        left: calc(50% - 200px);
        width: 400px;
        height: 20vh;
        z-index: 5;
        background-color: #fff;
        border: 1px solid #000;
        padding: 30px 20px 20px 20px;
        color: #5a5a5a;
        
        &__title {
            font-size: 22px;
            text-transform: uppercase;
            text-align: center;
        }
        &__text {
            margin-top: 20px;
            text-align: center;
        }
        &__close {
            position: absolute;
            top: 0;
            right: 0;
            padding: 5px;
            color: #d23878;
            border: 1px solid transparent;
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
                color: #a1275a;
            }
        }

        &__link {
            display: block;
            width: 40%;
            text-decoration: none;
            margin: 0 auto;
            margin-top: 40px;
            padding: 5px;
            text-align: center;
            text-transform: uppercase;
            border: 1px solid #d23878;
            background-color: #fff;
            color: #d23878;
            &:hover {
                color: #fff;
                background-color: #d23878;
            }
        }
    }

    @media (max-width: 580px) {
        .modal {
            width: 250px;
            left: calc(50% - 125px);
        }
    }

    @media (max-width: 380px) {
        .modal {
            width: 200px;
            left: calc(50% - 120px);
        }
    }
`;

export default ModalStyled;