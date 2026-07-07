import { useEffect, useState } from "react";
import api from "../services/api";

function TestAPI() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    api.get("/")
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch(() => {
        setMessage("❌ Backend connection failed");
      });
  }, []);

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1>Backend Test</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default TestAPI;