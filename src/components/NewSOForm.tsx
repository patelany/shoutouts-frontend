import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import "./NewSOForm.css";
import { addShoutout } from "../services/shoutoutApiService";
import NewShoutout from "../models/NewShoutout";
import AuthContext from "../context/AuthContext";
import { storage } from "../firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

interface Props {
  update: () => void;
  name?: string;
}

const NewSOForm = ({ update, name }: Props) => {
  const { user } = useContext(AuthContext);
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [shoutoutMsg, setShoutoutMsg] = useState("");

  const fileUploadRef = useRef<HTMLInputElement>(null);
  // if user is logged in with Google:
  // && the user has a photoURL

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    const newShoutout: NewShoutout = { to: to, from: from, text: shoutoutMsg };

    // file upload
    const someFiles = fileUploadRef.current?.files;
    // if there is a files array, and there is anything in that files array:
    if (someFiles && someFiles[0]) {
      console.log(someFiles[0]); // first thing - only thing - image we uploaded
      const newFile = someFiles[0];
      const storageRef = ref(storage, newFile.name);
      // uploadBytes is async
      uploadBytes(storageRef, newFile).then((snapshot) => {
        console.log(snapshot.ref.fullPath);
        // when the promise is returned, get download url
        getDownloadURL(snapshot.ref).then((url) => {
          console.log(url);
          newShoutout.shoutoutPhoto = url;
          console.log(newShoutout.shoutoutPhoto);
          if (user && user.photoURL) {
            newShoutout.authorPhoto = user.photoURL;
          }
          addShoutout(newShoutout);
          update();
          setTo("");
          setFrom("");
          setShoutoutMsg("");
        });
      });
    }
  };

  // const newShoutout: NewShoutout = { to: to, from: from, text: shoutoutMsg };

  useEffect(() => {
    if (user) {
      setFrom(user?.displayName || "");
    } else {
      setFrom("");
    }
  }, [user]);

  useEffect(() => {
    if (name) {
      setTo(name || "");
    } else {
      setTo("");
    }
  }, [name]);

  return (
    <form className="NewSOForm" onSubmit={submitHandler}>
      <div className="toAndFrom">
        <label htmlFor="to">To:</label>
        <input
          type="text"
          name="to"
          id="to"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          disabled={name ? true : false}
        />
        <label htmlFor="from">From:</label>
        <input
          type="text"
          name="from"
          id="from"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          disabled={user ? true : false}
        />
      </div>
      <label htmlFor="shoutoutMsg">Shout Out:</label>
      <textarea
        name="shoutoutMsg"
        id="shoutoutMsg"
        cols={30}
        rows={10}
        value={shoutoutMsg}
        onChange={(e) => setShoutoutMsg(e.target.value)}
      ></textarea>
      <label htmlFor="photo">Uplaod a photo:</label>
      <input type="file" name="photo" id="photo" ref={fileUploadRef} />
      <button>Submit Shout Out!</button>
    </form>
  );
};

export default NewSOForm;
