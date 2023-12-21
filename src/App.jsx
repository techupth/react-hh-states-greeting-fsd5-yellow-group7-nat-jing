import "./App.css";
import { useState } from "react";

function App() {
  const [greeting, setGreeting] = useState("Greeting Message");

  const handleButtonClick = (message) => {
    setGreeting(message);
  };

  return (
    <div className="App">
      <div className="greeting-container">{greeting}</div>
      <div className="buttons">
        <button onClick={() => handleButtonClick("สวัสดี!")}>สวัสดี!</button>
        <button onClick={() => handleButtonClick("Hi!")}>Hi!</button>
        <button onClick={() => handleButtonClick("你好!")}>你好!</button>
        {/* ลองเพิ่มคำทักทายภาษาญี่ปุ่นเข้าไปครับ */}
        <button onClick={() => handleButtonClick("おはようございます！")}>
          おはようございます！
        </button>
      </div>
    </div>
  );
}

export default App;
