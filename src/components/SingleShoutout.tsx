import NewShoutout from "../models/NewShoutout";
import "./SingleShoutout.css";

interface Props {
  shoutout: NewShoutout;
}

const SingleShoutout = ({ shoutout }: Props) => {
  return (
    <li className="SingleShoutout">
      <p>Shout out to {shoutout.to}</p>
      <p>- from {shoutout.from}</p>
      <p>{shoutout.text}</p>
    </li>
  );
};

export default SingleShoutout;
