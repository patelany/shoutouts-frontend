import { FormEvent, useState } from "react";
import "./NewSOForm.css";
import { addShoutout } from "../services/shoutoutApiService";

interface Props {
  update: () => void;
}

const NewSOForm = ({ update }: Props) => {
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [shoutoutMsg, setShoutoutMsg] = useState("");

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    await addShoutout({ to: to, from: from, text: shoutoutMsg });
    update();
    setTo("");
    setFrom("");
    setShoutoutMsg("");
  };

  return (
    <form className="NewSOForm" onSubmit={submitHandler}>
      <label htmlFor="to">To</label>
      <input
        type="text"
        name="to"
        id="to"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <label htmlFor="from">From</label>
      <input
        type="text"
        name="from"
        id="from"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />
      <label htmlFor="shoutoutMsg">Shout Out</label>
      <input
        type="text"
        name="shoutoutMsg"
        id="shoutoutMsg"
        value={shoutoutMsg}
        onChange={(e) => setShoutoutMsg(e.target.value)}
      />
      <button>Submit Shout Out!</button>
    </form>
  );
};

export default NewSOForm;
