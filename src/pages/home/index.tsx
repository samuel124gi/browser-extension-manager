import { Button } from "../../components/Button";
import Header from "../../components/Header";
import Cards from "./Cards";

import {
  ButtonContainer,
  Container,
  Heading,
  InnerContainer,
  MainContainer,
  TopContainer,
} from "./styles";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function handleActive() {
    navigate("/active");
  }
  function handleInactive() {
    navigate("/inactive");
  }
  return (
    <MainContainer>
      <InnerContainer>
        <Header />
        <Container>
          <TopContainer>
            <Heading>Extensions List</Heading>
            <ButtonContainer>
              <Button variant="tertiary" label="All" />
              <Button variant="primary" label="Active" onClick={handleActive} />
              <Button
                variant="primary"
                label="Inactive"
                onClick={handleInactive}
              />
            </ButtonContainer>
          </TopContainer>
          <Cards />
        </Container>
      </InnerContainer>
    </MainContainer>
  );
};

export default Home;
