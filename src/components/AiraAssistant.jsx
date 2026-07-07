import { useState } from "react";

function AiraAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "aira",
      text: "Hi! 👋 I'm Aira. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    let reply =
      "I'm still learning. Soon I'll recommend the perfect gifts! 🎁";

    if (input.toLowerCase().includes("birthday")) {
      reply = "🎂 I recommend flowers, chocolates, or a smartwatch.";
    } else if (input.toLowerCase().includes("girlfriend")) {
      reply = "💖 Roses, chocolates, jewelry, and perfumes are great choices.";
    } else if (input.toLowerCase().includes("mom")) {
      reply = "🌸 A flower bouquet, skincare kit, or personalized gift would be wonderful.";
    }

    const aiMessage = {
      sender: "aira",
      text: reply,
    };

    setMessages([...messages, userMessage, aiMessage]);
    setInput("");
  };

  return (
    <>
      <button
        className="aira-float"
        onClick={() => setOpen(!open)}
      >
        🤖
      </button>

      {open && (
        <div className="aira-window">
          <h3>Aira AI</h3>

          <div className="aira-messages">
            {messages.map((msg, index) => (
              <p key={index}>
                <strong>
                  {msg.sender === "aira" ? "Aira:" : "You:"}
                </strong>{" "}
                {msg.text}
              </p>
            ))}
          </div>

          <div className="aira-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Aira..."
            />

            <button onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AiraAssistant;