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
  const inactives = datas.filter((data) => !data.isActive);
  return (
    <CardsContainer>
      {inactives.map((inactive) => {
        const CardIcon = inactive.logo;
        return (
          <Card>
            <Container>
              <ImageContainer>
                <Image src={CardIcon} />
              </ImageContainer>
              <NamesContainer>
                <Heading>{inactive.name}</Heading>
                <CardText>{inactive.description}</CardText>
              </NamesContainer>
            </Container>
            <BottomContainer>
              <Button variant="secondary" label="Remove" />
              <SwitchContainer active={inactive.isActive}>
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
