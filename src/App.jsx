import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <h1 className="bg-rose-500 ">Chat app</h1>
      <h2>Sahar</h2>

      <h1 className="bg-rose-500 ">Chat app hello</h1>
      <h2>kani</h2>
    </>
  );
}

export default App;
