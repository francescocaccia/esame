import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Song = () => {
  return (
    <>
      <Link to="/album_page.html?id=">
        <Image fluid src="https://picsum.photos/400/400" alt="1" />
      </Link>
      <p>
        <Link to="/album_page.html?id=songInfo.album.id">
          Album: songInfo.album.title <br />
        </Link>
        <Link to="/artist_page.html?id=songInfo.artist.id">Artist: songInfo.artist.name</Link>
      </p>
    </>
  );
};

export default Song;
