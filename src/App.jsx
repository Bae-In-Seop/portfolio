import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import ggoggo from "./assets/img.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img src={ggoggo} style={{ width: 600, height: 400 }} />
      <p>꼬꼬쓰 포트폴리오 준비 페이지</p>
    </div>
  );
}

export default App;
