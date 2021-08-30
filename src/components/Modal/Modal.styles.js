import styled from "styled-components";

const ModalStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    z-index: 1;

    .modal {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 50%;
        height: 20vh;
        z-index: 5;
        background-color: #fff;
        border: 1px solid #000;
        &__title {
            font-size: 24px;
        }
        &__text {
            margin-top: 20px;
        }
        &__close {
            position: absolute;
            top: 0;
            right: 0;
        }
    }
`;

export default ModalStyled;