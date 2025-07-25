import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`min-h-screen w-screen overflow-x-hidden sm:bg-Gray-50 ${
        active && "bg-Gray-500"
      }`}
    >
      <Navbar active={active} setActive={setActive} />
      <Hero />
    </div>
  );
};

export default App;
