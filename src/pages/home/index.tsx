import { Button } from "../../components/Button";
import Header from "../../components/Header";
import Cards from "./../../components/Cards";
import data from "../../services/data.json";
import {
  ButtonContainer,
  CardsContainer,
  Container,
  Heading,
  InnerContainer,
  MainContainer,
  TopContainer,
} from "./styles";
import { useState } from "react";

const Home = () => {
  const [original, setOriginal] = useState(data);
  const [list, setList] = useState(data);

  function handleRemove(name: string) {
    // const newList = list.filter((item) => item.name !== name);
    // setList(newList);
    const updated = original.filter((item) => item.name !== name);
    setOriginal(updated);
    setList(updated);
  }
  function handleAll() {
    setList(original);
  }
  function handleActive() {
    setList(original.filter((d) => d.isActive));
  }
  function handleInactive() {
    setList(original.filter((d) => !d.isActive));
  }

  return (
    <MainContainer>
      <InnerContainer>
        <Header />
        <Container>
          <TopContainer>
            <Heading>Extensions List</Heading>
            <ButtonContainer>
              <Button variant="tertiary" label="All" onClick={handleAll} />
              <Button variant="primary" label="Active" onClick={handleActive} />
              <Button
                variant="primary"
                label="Inactive"
                onClick={handleInactive}
              />
            </ButtonContainer>
          </TopContainer>
          <CardsContainer>
            {list.map((item) => (
              <Cards data={item} remove={handleRemove} />
            ))}
          </CardsContainer>
        </Container>
      </InnerContainer>
    </MainContainer>
  );
};

export default Home;
