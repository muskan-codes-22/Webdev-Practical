import { useState } from "react";

function App() {
  const [liked, setLiked] = useState(false);

  return (
    <div>
      <h1>Like Button</h1>
      <button onClick={() => setLiked(!liked)}>{liked ? "❤️" : "🤍"}</button>
      <p>You liked the button then its red</p>
    </div>
  );
}

export default App;


// import {useState,useEffect} from "react";
// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => setUsers(data));
//   }, []);



// }
// export default App;
