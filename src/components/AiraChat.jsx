import { useState } from "react";
import { getAiraResponse } from "../ai/airaBrain";

function AiraChat() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  const askAira = () => {
    const response = getAiraResponse(input);
    setResult(response);
  };

  return (
    <div className="aira-chat">

      <h2>🤖 Ask Aira</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="e.g. gift for mom under 1000"
      />

      <button onClick={askAira}>
        Ask
      </button>

      <div className="result">
        {result.map((item) => (
          <div key={item.id} className="ai-card">
            <p>{item.image} {item.name}</p>
            <p>₹{item.price}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default AiraChat;