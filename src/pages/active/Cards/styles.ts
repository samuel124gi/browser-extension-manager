import styled from "@emotion/styled";
import colors from "../../../styles/colors";
import datas from "../../../services/data.json";

const active = datas.filter((data) => data.isActive);
export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;
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
  gap: 10px;
`;

export const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
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

export const Title = styled.h1`
  font-size: 17px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0px;
  color: ${colors.secondary02};
`;

export const CardText = styled.h1`
  font-size: 16px;
  font-weight: 300;
  line-height: 130%;
  letter-spacing: -0.5px;
  color: ${colors.secondary05};
`;

export const NamesContainer = styled.div`
  display: flex;
  gap: 5px;
  width: 266px;
  flex-direction: column;
`;

console.log(active);
export const SwitchContainer = styled.div<{ active: boolean }>`
  margin: 0px auto;
  height: 20px;
  width: 36px;
  border-radius: 16px;
  display: flex;
  gap: 32px;
  padding: 2px;
  align-items: center;
  background: ${(props) => (props.active ? "#C7231A" : "#C6C6C6")};
  padding-left: ${(props) => (props.active ? "18px" : "5px")};
`;
export const SwitchButton = styled.button`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${colors.white};
  border: none;
  cursor: pointer;
`;
