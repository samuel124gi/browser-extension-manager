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
  const actives = datas.filter((active) => active.isActive);
  return (
    <CardsContainer>
      {actives.map((active) => {
        const CardIcon = active.logo;
        return (
          <Card>
            <Container>
              <ImageContainer>
                <Image src={CardIcon} />
              </ImageContainer>
              <NamesContainer>
                <Heading>{active.name}</Heading>
                <CardText>{active.description}</CardText>
              </NamesContainer>
            </Container>
            <BottomContainer>
              <Button variant="secondary" label="Remove" />
              <SwitchContainer active={active.isActive}>
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
