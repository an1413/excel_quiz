import Button from "../../../component/common/Button";
import styled from "styled-components";
import { css } from "styled-components";

export const SignupContainer = styled.main`
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

export const SignupForm = styled.form`
  margin: auto 0;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 28px;
  text-align: center;
  margin-bottom: 20px;
`;

export const SignupButton = styled(Button)`
  margin-top: 50px;
  background-color: #05742a;
  color: #fff;
  font-weight: 700;
  font-size: 1.2rem;
  ${(props) =>
    props.disabled &&
    css`
      background-color: #ddd;
      color: #000;
      cursor: not-allowed;
    `}
`;