import "./Main.css";
import React, { useEffect, useState } from "react";
import NewSOForm from "./NewSOForm";
import ShoutoutList from "./ShoutoutList";
import NewShoutout from "../models/NewShoutout";
import { getAllShoutouts } from "../services/shoutoutApiService";

const Main = () => {
  const [allShoutouts, setAllShoutouts] = useState<NewShoutout[]>([]);

  const updateList = (): void => {
    getAllShoutouts().then((res) => {
      setAllShoutouts(res);
    });
  };

  useEffect(() => {
    updateList();
  }, []);
  return (
    <main className="Main">
      <NewSOForm update={updateList} />
      <ShoutoutList allShoutouts={allShoutouts} update={updateList} />
    </main>
  );
};

export default Main;
