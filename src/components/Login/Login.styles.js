import styled from "styled-components";

const LoginStyled = styled.div`
    width: 50%;
    margin: 0 auto;
    margin-top: 70px;
    padding: 0 100px;
    border: 1px solid #d23878;
    color: #5a5a5a;
    border-radius: 5px;
    box-shadow: 0px 4px 25px 0px rgba(0,0,0, 0.2);  
    a {
        text-decoration: none;
    }
    .login {
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
                margin: 10px 0;
                height: 42px;
                border: 1px solid #d23878;
                color: #fff;
                background-color: #d23878;
                text-transform: uppercase;
                &:hover {
                    color: #d23878;
                    background-color: #fff;
                }
            }
            &-text {
                display: block;
                text-align: left;
                margin: 15px 0;
                color: #d23878;
            }
        }
    }
`;

export default LoginStyled;