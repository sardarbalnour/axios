import { useState } from "react";

import axios from "axios";

function Put() {
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");

  const updateHandler = () => {
    // axios
    //   .patch(`https://jsonplaceholder.typicode.com/posts/${id}`, { title })
    //   .then((res) => console.log(res));

    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, { title })
      .then((res) => console.log(res));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={updateHandler}>UPDATE</button>
    </div>
  );
}

export default Put;
