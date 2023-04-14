import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
