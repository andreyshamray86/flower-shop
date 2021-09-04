import styled from "styled-components";

const SpinnerStyled = styled.div`
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .lds-dual-ring {
        display: inline-block;
        width: 80px;
        height: 80px;
    }
    .lds-dual-ring:after {
        content: " ";
        display: block;
        width: 40px;
        height: 40px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #d23878;
        border-color: #d23878 transparent #d23878 transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export default SpinnerStyled;