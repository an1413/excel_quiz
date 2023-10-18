import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../component/common/Button";
import { css } from "styled-components";

export const Container = styled.div`
  width: 87%;
  max-width: 500px;
  margin: 20px auto;
  padding: 1rem;
  background-color: #fff;
  border-radius: 1rem;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 28px;
  text-align: center;
  margin-bottom: 20px;
`;

export const LoginForm = styled.form`
  margin: auto 0;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

export const SignupButton = styled(Button)`
  margin-top: 50px;
  background-color: #998066;
  color: #fff;
  font-weight: 700;
  font-size: 1.2rem;
  font-family: 'GmarketSansMedium';
  ${(props) =>
    props.disabled &&
    css`
      background-color: #ddd;
      color: #000;
      cursor: not-allowed;
    `}
`;
export const SignUpLink = styled(Link)`
  display: block;
  margin-top: 30px;
  color: #767676;
  font-size: 14px;
  text-align: center;
`;
