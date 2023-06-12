import {
  getMyShoutouts,
  getUserShoutouts,
} from "../services/shoutoutApiService";
import "./Details.css";
import { useContext, useEffect, useState } from "react";
import ShoutoutList from "./ShoutoutList";
import { Link, useParams } from "react-router-dom";
import NewShoutout from "../models/NewShoutout";
import AuthContext from "../context/AuthContext";

const Details = () => {
  const { user } = useContext(AuthContext);
  const [userShoutouts, setUserShoutouts] = useState<NewShoutout[]>([]);
  const name: string | undefined = useParams().name;
  const updateList = (): void => {
    if (name) {
      getUserShoutouts(name).then((res) => {
        setUserShoutouts(res);
      });
    } else {
      if (user) {
        getMyShoutouts(user.displayName!).then((res) => {
          setUserShoutouts(res);
          console.log(res);
        });
      }
    }
  };

  useEffect(() => {
    updateList();
  }, [name, user]);
  console.log(userShoutouts);

  return (
    <div className="Details">
      <Link to={`/`} className="home-link">
        Back to All Shoutouts
      </Link>
      <ShoutoutList
        allShoutouts={userShoutouts}
        name={name}
        update={updateList}
      />
    </div>
  );
};

export default Details;
