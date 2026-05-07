import { useState } from "react";

function App() {
  const [liked, setLiked] = useState(false);

  return (
    <div>
      <h1>Like Button</h1>
      <button onClick={() => setLiked(!liked)}>{liked ? "❤️" : "🤍"}</button>
    </div>
  );
}

export default App;


// import {useState,useEffect} from "react";
// function App(){
//     const [user,setUsers]=useState([]);
//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then((response)=>(response.json))
//         .then((response)=>(data))
//     })

//     return(

//     );
// }
// export default App;
