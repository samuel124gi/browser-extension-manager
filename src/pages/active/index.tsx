import { Button } from "../../components/Button";
import Header from "../../components/Header";
import Cards from "./Cards";
import { useNavigate } from "react-router-dom";

import {
  ButtonContainer,
  Container,
  Heading,
  InnerContainer,
  MainContainer,
  TopContainer,
} from "./styles";

const Active = () => {
  const navigate = useNavigate();
  function handleHome() {
    navigate("/");
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
              <Button variant="primary" label="All" onClick={handleHome} />
              <Button variant="tertiary" label="Active" />
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

export default Active;
