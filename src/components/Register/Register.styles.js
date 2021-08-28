import styled from "styled-components";

const RegisterStyled = styled.div`
    padding: 50px 200px;
    width: 50%;
    margin: 0 auto;
    margin-top: 70px;
    padding: 0 100px;
    border: 1px solid #8cae3e;
    border-radius: 5px;
    color: #5a5a5a;
    box-shadow: 0px 4px 25px 0px rgba(0,0,0, 0.2);  
    .register {
        &__title {
            margin-top: 25px;
            font-size: 24px;
            text-transform: uppercase;
            text-align: center;
        }
        &__form {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
            label {
                margin-bottom: 10px;
            }
            input {
                margin-bottom: 10px;
                padding: 10px;
                border: 1px solid #5a5a5a;
                color: #5a5a5a;
            }
            &-btn {
                margin: 30px 0 0 0;
                height: 42px;
                border: 1px solid #8cae3e;
                color: #fff;
                background-color: #8cae3e;
                text-transform: uppercase;
                &:hover {
                    color: #8cae3e;
                    background-color: #fff;
                }
            }
            &-btngoogle {
                margin: 30px auto;
                width: 50%;
                height: 42px;
                border: 1px solid #8cae3e;
                color: #fff;
                background-color: #8cae3e;
                text-transform: uppercase;
                &:hover {
                    color: #8cae3e;
                    background-color: #fff;
                }
            }
            &-text {
                display: block;
                text-align: left;
                margin-bottom: 15px;
                color: #d23878;
            }
        }
    }
`;

export default RegisterStyled;