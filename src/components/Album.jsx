import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlbumAction } from "../redux/actions";
import Sidebar from "./Sidebar";
import Bottombar from "./Bottombar";
import MainAlbum from "./MainAlbum";

const Album = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const albumData = useSelector(state => state.albums[id] || []);
  const test = useSelector(state => console.log(state));
  useEffect(() => {
    dispatch(getAlbumAction(id));
  }, []);

  if (!albumData || !albumData.tracks) return <div>Loading</div>;

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
      <h1>{albumData.title}</h1>
      {albumData.tracks.data.map(track => track.title)}
      <Bottombar />
    </Container>
  );
};

export default Album;
