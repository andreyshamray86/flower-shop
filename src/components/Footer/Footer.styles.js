import styled from "styled-components";

const FooterStyled = styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
    padding: 0 100px;
    margin-top: 20px;
    color: #9e9e9e;
    .footer {
        &__nav {
            display: flex;
            height: 100%;
            justify-content: center;
            align-items: center;
            padding: 15px 0;
            &-item {
                padding: 0 10px;
                text-align: center;
                cursor: pointer;
                &:hover {
                    color: #000;
                }
            }
        }
        &__about {
            display: flex;
            margin: 0 auto;
            &-info {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                h4 {
                    font-size: 20px;
                    margin-bottom: 5px;
                    text-align: center;
                }
                p {
                    font-size: 16px;
                    text-align: center;
                    margin-top: 5px;
                }
            }
        }
        &__social {
            display: flex;
            justify-content: space-around;
            width: 200px;
            margin: 0 auto;
            margin-top: 30px;
            padding-bottom: 30px;
            cursor: pointer;
        }
    }
`;

export default FooterStyled;