import styled from "@emotion/styled";
import colors from "../../styles/colors";

export const MainContainer = styled.div`
  padding: 50px 0px;
  background: ${colors.gradient02};
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const InnerContainer = styled.div`
  width: 1100px;
  gap: 40px;
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: auto;
`;

export const TopContainer = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Heading = styled.h1`
  font-size: 34px;
  font-weight: bold;
  line-height: 100%;
  letter-spacing: -1px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
