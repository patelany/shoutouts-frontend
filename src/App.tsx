import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import NewSOForm from "./components/NewSOForm";
import ShoutoutList from "./components/ShoutoutList";
import NewShoutout from "../src/models/NewShoutout";
import { getAllShoutouts } from "./services/shoutoutApiService";

function App() {
  const [allShoutouts, setAllShoutouts] = useState<NewShoutout[]>([]);
  const updateList = async (): Promise<void> => {
    await getAllShoutouts().then((res) => {
      setAllShoutouts(res);
    });
  };

  useEffect(() => {
    updateList();
  }, []);

  useEffect(() => {
    //call api, set shoutouts
  }, []);
  return (
    <div className="App">
      <ShoutoutList allShoutouts={allShoutouts} update={updateList} />
      <NewSOForm update={updateList} />
    </div>
  );
}

export default App;
