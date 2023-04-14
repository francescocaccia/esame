import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Bottombar from "./Bottombar";
import Main from "./Main";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col xs={12} md={9} className="offset-md-3 mainPage">
          <Main />
        </Col>
      </Row>
      <Bottombar />
    </Container>
  );
};

export default Home;
