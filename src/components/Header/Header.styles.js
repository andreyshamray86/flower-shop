import styled from "styled-components";

const HeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1440px;
    height: 80px;
    padding: 0 100px;

    .left {
        width: 550px;
        display: flex;
        justify-content: space-between;
        &__logo {
            display: flex;
            justify-content: space-between;
            align-items: center;

            h1 {
                font-size: 24px;
                font-weight: bold;
                color: #d23878;
            }
            &-shop {
                color: #8cae3e;
            }
        }

        &__nav {
            display: flex;
            height: 100%;
            align-items: center;
            &-item {
                margin-right: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 20px;
                padding: 7px;
                font-size: 17px;
                color: #d23878;
                border: 1px solid transparent;
                text-decoration: none;
                cursor: pointer;
                transition: all 0.3s;

                &:hover {
                    color: #8cae3e;
                    box-shadow: 4px 4px 8px 0px rgba(140, 174, 62, 0.3);
                    border-radius: 5px;    
                }
            }
        }
        a {
            text-decoration: none;
        }
    }

    .right {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 300px;
        &__auth {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 20px;
            padding: 7px;
            font-size: 17px;
            color: #d23878;
            border: 1px solid transparent;
            cursor: pointer;
            transition: all 0.3s;
            &:hover {
                color: #8cae3e;
                box-shadow: 4px 4px 8px 0px rgba(140, 174, 62, 0.3);
                border-radius: 5px; 
            }
            a {
                color: #d23878;
                text-decoration: none;
            }
        }
        &__cart {
            cursor: pointer;
        }
        &__search {
            cursor: pointer;
        }
    }
`;

export default HeaderStyled;