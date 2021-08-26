import styled from "styled-components";

const SortStyled = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    margin-top: 20px;
    padding: 0 220px;

    label {
        font-size: 18px;
        margin-right: 10px;
        color: #5a5a5a;
    }

    .select {
        cursor: pointer;
        border: none;
        padding: 3px;
        font-family: inherit;
        font-size: 18px;
        color: #5a5a5a;
        border: 1px solid #5a5a5a;
    }
`;

export default SortStyled;