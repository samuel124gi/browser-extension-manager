import styled from "@emotion/styled";
import colors from "../../styles/colors";
interface buttonProps {
  alignItem?: string;
  background?: string;
  active?: boolean;
}

export const Card = styled.div`
  display: flex;
  gap: 20px;
  border-radius: 8px;
  height: 200px;
  justify-content: space-between;
  padding: 20px;
  flex-direction: column;
  background-color: ${colors.white};
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
`;

export const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 150px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 60px;
  height: 60px;
  overflow: hidden;
  border-radius: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const Heading = styled.h1`
  font-size: 17px;
  font-weight: bold;
  line-height: 100%;
  letter-spacing: 0px;
  color: ${colors.secondary08};
`;

export const CardText = styled.h1`
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.5px;
  color: ${colors.secondary05};
`;

export const NamesContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 266px;
`;

export const SwitchContainer = styled.div<buttonProps>`
  margin: 0px auto;
  height: 20px;
  width: 36px;
  border-radius: 16px;
  display: flex;
  gap: 32px;
  padding: 2px;
  align-items: center;
  background: ${(props) => props.background};
  position: relative;
`;
export const SwitchButton = styled.button<buttonProps>`
  width: 16px;
  height: 16px;
  position: absolute;
  border-radius: 50%;
  background-color: ${colors.white};
  border: none;
  cursor: pointer;
  left: ${(props) => props.alignItem};
  transition: all 0.3s ease;
`;
