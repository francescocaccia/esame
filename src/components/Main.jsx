import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Song from "./Song";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getRockAction, getPopAction, getHipHopAction } from "../redux/actions";
import { getSongsAction } from "../redux/actions";

const Main = () => {
  const dispatch = useDispatch();

  const rockData = useSelector(state => state.songs["rock classics"] || []);
  const popData = useSelector(state => state.songs["pop culture"] || []);
  const hipHopData = useSelector(state => state.songs["hip hop"] || []);

  useEffect(() => {
    dispatch(getSongsAction("rock classics"));
    dispatch(getSongsAction("pop culture"));
    dispatch(getSongsAction("hip hop"));
  }, []);

  return (
    <>
      <Row>
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
          <Link to="/">TRENDING</Link>
          <Link to="/">PODCAST</Link>
          <Link to="/">MOODS AND GENRES</Link>
          <Link to="/">NEW RELEASES</Link>
          <Link to="/">DISCOVER</Link>
        </Col>
      </Row>

      <Row>
        <Col xs={10}>
          <div id="searchResults">
            <h2>Search Results</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
              <Col className="text-center">
                <Song />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={10}>
          <div id="rock">
            <h2>Rock Classics</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
              {rockData.map(song => (
                <Col className="text-center" key={song.id}>
                  <Song song={song} />
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={10}>
          <div id="pop">
            <h2>Pop Culture</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection">
              {popData.map(song => (
                <Col className="text-center" key={song.id}>
                  <Song song={song} />
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={10}>
          <div id="hiphop">
            <h2>HipHop</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="hipHopSection">
              {hipHopData.map(song => (
                <Col className="text-center" key={song.id}>
                  <Song song={song} />
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Main;
