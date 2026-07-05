import { useEffect, useState } from "react";

import axios from "axios";

import Post from "./components/Post";
import Delete from "./components/Delete";
import Put from "./components/Put";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setTodos(res));

    // axios
    //   .all([
    //     axios.get("https://jsonplaceholder.typicode.com/todos"),
    //     axios.get("https://jsonplaceholder.typicode.com/posts"),
    //     axios.get("https://jsonplaceholder.typicode.com/users"),
    //   ])
    //   .then(
    //     axios.spread((todos, posts, users) => {
    //       console.log(posts);
    //       console.log(users);
    //       setTodos(todos.data);
    //     })
    //   );
  }, []);

  return (
    <>
      <h1>Sardar the dev</h1>
      <Post />
      <Delete />
      <Put />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
