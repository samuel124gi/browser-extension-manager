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

const InActive = () => {
  const navigate = useNavigate();
  function handleHome() {
    navigate("/");
  }
  function handleActive() {
    navigate("/active");
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
              <Button variant="primary" label="Active" onClick={handleActive} />
              <Button variant="tertiary" label="Inactive" />
            </ButtonContainer>
          </TopContainer>
          <Cards />
        </Container>
      </InnerContainer>
    </MainContainer>
  );
};

export default InActive;
