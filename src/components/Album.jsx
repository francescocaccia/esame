import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Bottombar from "./Bottombar";
import MainAlbum from "./MainAlbum";

const Album = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col xs={12} md={9} className="offset-md-3 mainPage">
          <MainAlbum />
        </Col>
      </Row>
      <Bottombar />
    </Container>
  );
};

export default Album;
