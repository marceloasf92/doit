import Button from "../../components/Button";
import { Container, Content } from "./styles";
import { Redirect, useHistory } from "react-router-dom";

const Home = ({ authenticated }) => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Content>
        <h1>
          do<span>.</span>it
        </h1>
        <span>Organiza-se de forma fácil e efetiva</span>
        <div>
          <Button whiteSchema onClick={() => handleNavigation("/signup")}>
            Cadastre-se
          </Button>
          <Button onClick={() => handleNavigation("/login")}>Login</Button>
        </div>
      </Content>
    </Container>
  );
};

export default Home;
