import { useState } from "react";

import axios from "axios";

function Delete() {
  const [id, setId] = useState("");

  const deleteHandler = () => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
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
      <button onClick={deleteHandler}>DELETE</button>
    </div>
  );
}

export default Delete;
