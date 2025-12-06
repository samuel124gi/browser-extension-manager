import {
  Card,
  ImageContainer,
  NamesContainer,
  Heading,
  CardText,
  Image,
  Container,
  SwitchContainer,
  SwitchButton,
  BottomContainer,
} from "./styles";
import { Button } from "../Button";

type data = {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
};
interface CardProps {
  data: data;
  remove: (name: string) => void;
}

import { useEffect, useState } from "react";
const Cards = ({ data, remove }: CardProps) => {
  const [alignIitem, setAlignItem] = useState("1px");
  const [background, setBackground] = useState("#C6C6C6");
  useEffect(() => {
    if (data.isActive) {
      setBackground("#C7231A");
      setAlignItem("18px");
    } else {
      setBackground("#C6C6C6");
      setAlignItem("1px");
    }
  }, [data.isActive]);
  function handleAlignItem() {
    const item = alignIitem === "1px" ? "18px" : "1px";
    const color = background === "#C6C6C6" ? "#C7231A" : "#C6C6C6";
    setAlignItem(item);
    setBackground(color);
    !data.isActive;
  }
  return (
    <Card>
      <Container>
        <ImageContainer>
          <Image src={data.logo} />
        </ImageContainer>
        <NamesContainer>
          <Heading>{data.name}</Heading>
          <CardText>{data.description}</CardText>
        </NamesContainer>
      </Container>
      <BottomContainer>
        <Button
          variant="secondary"
          label="Remove"
          onClick={() => remove(data.name)}
        />
        <SwitchContainer active={data.isActive} background={background}>
          <SwitchButton onClick={handleAlignItem} alignItem={alignIitem} />
        </SwitchContainer>
      </BottomContainer>
    </Card>
  );
};

export default Cards;
