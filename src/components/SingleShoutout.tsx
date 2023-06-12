import { Link } from "react-router-dom";
import NewShoutout from "../models/NewShoutout";
import "./SingleShoutout.css";
import { deleteOneShoutout } from "../services/shoutoutApiService";

interface Props {
  shoutout: NewShoutout;
  update: () => void;
}

const SingleShoutout = ({ shoutout, update }: Props) => {
  console.log(shoutout);

  const deleteHandler = (): void => {
    deleteOneShoutout(shoutout._id!).then((res) => {
      console.log(res);
      update();
    });
  };
  console.log(shoutout);
  return (
    <li className="SingleShoutout">
      <h3>
        Shout out to{" "}
        <Link
          to={`/user/${encodeURIComponent(shoutout.to)}`}
          className="user-link"
        >
          {shoutout.to}
        </Link>
      </h3>

      <p className="from">
        - From:{" "}
        {shoutout.authorPhoto && (
          <img
            className="author-img"
            src={shoutout.authorPhoto}
            alt="author profile image"
          />
        )}
        <Link to={`/user/${encodeURIComponent(shoutout.from)}`}>
          {shoutout.from}
        </Link>
      </p>
      <p style={{ textAlign: "center" }}>{shoutout.text}</p>
      {shoutout.shoutoutPhoto && (
        <img src={shoutout.shoutoutPhoto} alt="shoutout photo" />
      )}
      <button onClick={deleteHandler}>delete</button>
    </li>
  );
};

export default SingleShoutout;
