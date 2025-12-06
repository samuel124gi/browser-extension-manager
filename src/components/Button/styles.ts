import styled from "@emotion/styled";
import colors from "../../styles/colors";
import { ButtonVariant } from "../../types/component";

export const StyledButton = styled.button<{
  variant: ButtonVariant;
  background?: string;
}>`
  width: fit-content;
  height: 46px;
  border: 1px solid ${colors.secondary03};
  text-align: center;
  display: flex;
  border-radius: 30px;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  ${({ variant }) =>
    variant === "primary" &&
    `
    padding: 6px 20px;
   letter-spacing: -0.3px;
   font-size: 20px;
    background-color : ${colors.white};
    color: ${colors.secondary08};
    line-height: 140%;
  font-weight: 500;
    &:hover {
    background-color: ${colors.primary02};
    color:${colors.white};
    border: none;
    }
  `}

  ${({ variant }) =>
    variant === "secondary" &&
    `
    line-height: 140%;
   font-weight: 500;
    padding: 6px 20px;
    letter-spacing: -0.5px;
    font-size: 16px;
    background-color : ${colors.white};
    color: ${colors.secondary08};
    &:hover {
    border: none;
      background-color: ${colors.primary01};
      color:${colors.white};
      
    }
      &:active {
      border: 1px solid ${colors.primary01};
      background-color: ${colors.secondary02};
      color: ${colors.secondary08};
    }
  `}
    ${({ variant }) =>
    variant === "tertiary" &&
    `
    padding: 6px 20px;
   letter-spacing: -0.3px;
   font-size: 20px;
    background-color : ${colors.primary02};
    color: ${colors.white};
    line-height: 140%;
  font-weight: 500;
    &:hover {
      background-color: ${colors.primary02};
      color:${colors.white};
    border: none;
    }
  `}
`;
