import "./ShoutoutList.css";
import SingleShoutout from "./SingleShoutout";
import NewShoutout from "../models/NewShoutout";

interface Props {
  allShoutouts: NewShoutout[];
  name?: string;
  update: () => void;
}

const ShoutoutList = ({ allShoutouts, name, update }: Props) => {
  return (
    <div className="ShoutoutList">
      {name ? <h2>Shoutouts to {name}</h2> : <h2>All Shoutouts</h2>}
      <ul>
        {allShoutouts.map((shoutout) => (
          <SingleShoutout
            shoutout={shoutout}
            key={shoutout._id}
            update={update}
          />
        ))}
      </ul>
    </div>
  );
};

export default ShoutoutList;
