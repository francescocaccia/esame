import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { playSong } from "../redux/actions";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { toggleFavourite } from "../redux/actions";

const Song = ({ song }) => {
  const dispatch = useDispatch();

  const isFavorite = useSelector(state => song && state.favourites[song.id]);

  const state = useSelector(state => state.favourites);

  if (!song) return null;

  return (
    <>
      <Link to={`/album/${song.album.id}`}>
        <Image fluid src={song.album.cover} alt="1" />
      </Link>
      <p>
        <div
          style={{ icon: "cursor" }}
          onClick={() => {
            dispatch(playSong(song));
          }}
        >
          {song.title}
          <div
            onClick={() => {
              dispatch(toggleFavourite(song.id));
            }}
          >
            {isFavorite ? <FaHeart style={{ color: "red" }} /> : <FaRegHeart style={{ color: "white" }} />}
          </div>
        </div>
        <Link to="{song.link}">
          Album: {song.album.title_short} <br />
        </Link>
        <Link to="/artist_page.html?id=songInfo.artist.id">Artist: {song.artist.name}</Link>
      </p>
    </>
  );
};

export default Song;
