import {
  CardsContainer,
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
import datas from "../../../services/data.json";
import { Button } from "../../../components/Button";

const Cards = () => {
  return (
    <CardsContainer>
      {datas.map((data) => {
        const CardIcon = data.logo;
        return (
          <Card>
            <Container>
              <ImageContainer>
                <Image src={CardIcon} />
              </ImageContainer>
              <NamesContainer>
                <Heading>{data.name}</Heading>
                <CardText>{data.description}</CardText>
              </NamesContainer>
            </Container>
            <BottomContainer>
              <Button variant="secondary" label="Remove" />
              <SwitchContainer active={data.isActive}>
                <SwitchButton />
              </SwitchContainer>
            </BottomContainer>
          </Card>
        );
      })}
    </CardsContainer>
  );
};

export default Cards;
