import { useEffect, useState } from "react";
import "./ShoutoutList.css";
import SingleShoutout from "./SingleShoutout";
import NewSOForm from "./NewSOForm";
import NewShoutout from "../models/NewShoutout";

interface Props {
  allShoutouts: NewShoutout[];
  update: () => void;
}

const ShoutoutList = ({ allShoutouts, update }: Props) => {
  return (
    <div className="ShoutoutList">
      <ul>
        <NewSOForm update={update} />
        {allShoutouts.map((shoutout) => (
          <SingleShoutout shoutout={shoutout} key={shoutout._id} />
        ))}
      </ul>
    </div>
  );
};

export default ShoutoutList;
