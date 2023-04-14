import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Song = ({ song }) => {
  if (!song) return null;
  return (
    <>
      <Link to={`/album/${song.id}`}>
        <Image fluid src={song.album.cover} alt="1" />
      </Link>
      <p>
        {song.title}
        <Link to="{song.link}">
          Album: {song.album.title_short} <br />
        </Link>
        <Link to="/artist_page.html?id=songInfo.artist.id">Artist: {song.artist.name}</Link>
      </p>
    </>
  );
};

export default Song;
