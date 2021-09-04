import styled from "styled-components";

const RegisterStyled = styled.div`
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
                position: relative;
                margin-bottom: 10px;
                padding: 10px;
                border: 1px solid #5a5a5a;
                color: #5a5a5a;
            }
            &-btn {
                margin: 30px 0;
                height: 42px;
                border: 1px solid #8cae3e;
                color: #fff;
                background-color: #8cae3e;
                text-transform: uppercase;
                &:hover {
                    color: #8cae3e;
                    background-color: #fff;
                }
                &:disabled {
                    border: 1px solid #b6c594;
                    background-color: #b6c594;
                    &:hover {
                        color: #fff;
                        cursor: not-allowed;
                    }
                }
            }
            &-text {
                display: block;
                text-align: left;
                margin-bottom: 15px;
                color: #d23878;
            }

            .error-cross {
                position: relative;
                top: -76px;
                right: -95%;
                width: 15px;
                height: 15px;
                img {
                    width: 100%;
                }
            }

            .error {
                margin-bottom: 20px;
                color: #b80202;
            }
            .input-error {
                border: 1px solid #b80202;
                &:after {
                    content: 'x';
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    top: 0;
                    right: 0;
                }
            }
        }
    }

    @media (max-width: 768px) {
        margin: 0 auto;
        margin-top: 70px;
        padding: 0 50px;
        width: 60%;
        .register {
            &__form {
                .error-cross {
                    position: relative;
                    top: -76px;
                    right: -90%;
                    width: 15px;
                    height: 15px;
                }
            }
        }
    }

    @media (max-width: 460px) {
        .login {
            &__form {
                &.error {
                    margin-bottom: 3px;
                }
            }
        }
    }

    @media (max-width: 360px) {
        .register {
            &__form {
                .error-cross {
                    right: -86%;
                }
            }
        }
        
    }
`;

export default RegisterStyled;